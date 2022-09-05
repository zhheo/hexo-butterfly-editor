'use strict';

const _			= {
	defaultsDeep: require('lodash.defaultsdeep'),
	findIndex		: require('lodash.findindex'),
	isEmpty			: require('lodash.isempty'),
	trimStart: require('lodash.trimstart'),
	trimEnd: require('lodash.trimend')
};

// -----------------------------------------------------------------------------

const REMOVE_MARKDOWN	= require('remove-markdown');
const STRIPTAGS				= require('striptags');

// -----------------------------------------------------------------------------

/**
 * holds relevant functions and data
 */
const PLUGIN = {
	name					: 'autometa', // the would also be the key used in frontmatter
	default_metas : {}
};

// -----------------------------------------------------------------------------

const resolveURL = ( base, path ) =>
	`${_.trimEnd( base, '/' )}/${_.trimStart( path, '/' )}`

/**
 * @return {object}
 */
PLUGIN.get_options_defaults = () =>
{
		
	const out = {
		
		enable	: true, // enables/disables everything - control per page using frontmatter
		image		: true, // regular meta image used by search engines
		twitter	: true, // twitter card
		og			: true, // open graph: facebook, pinterest, google+
		schema	: true, // schema.org for google

		// -------------------------------------------------------------------------
		
		// canonical_base is the canonical url base - best to set once in config.js
		// if set it will be used to prepend page path and add it to the following:
		// - canonical link
		// - twitter:url
		// - og:url
		
		canonical_base: '',
		
		// @todo
		//canonical_link: true,
		//
		// having only started with vuepress a few days ago, 
		// so far, i couldn't figure out a proper way to extend config head
		// and add <link rel="canonical" href="resolveURL( canonical_base, $page.path )">

		// -------------------------------------------------------------------------
		
		author: {
			name		: '',
			twitter	: '',
			//url			: '', // not used currently
		},

		// -------------------------------------------------------------------------
	
		// @notes:
		//
		// it's more logical to have this one set once in
		// `.vuepress/config.js` or `.vuepress/theme/index.js` `head`
		
		site: {
			name		: '',
			twitter	: '',
			//url			: '', // not used currently
		},

		// -------------------------------------------------------------------------
		
		// not sure if these should be allowed to be set in frontmatter
		
		// order of what gets the highest priority:
		//
		// 1. frontmatter
		// 2. page excerpt
		// 3. content markdown paragraph
		// 4. content regular html <p>
		
		description_sources: [
		
			'frontmatter',
			'excerpt',
			
			// markdown paragraph regex
			// @todo: needs work
			//
			/^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
			//
			// this excludes blockquotes using `(?!^>)`
			///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
			
			// html paragraph regex
			/<p(?:.*?)>(.*?)<\/p>/i,

			// -----------------------------------------------------------------------
			
			// @notes: setting as array require escaping `\`
			
			//['^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n', 'img'],
			//['<p(?:.*?)>(.*?)<\/p>', 'i'],
			
		],

		// -------------------------------------------------------------------------
		
		// @consider description max words/char

		// -------------------------------------------------------------------------
	
		// order of what gets the highest priority:
		//
		// 1. frontmatter
		// 2. content markdown image such as `![alt text](http://url)`
		// 3. content regular html img
		
		image_sources: [
		
			'frontmatter',
			
			/!\[.*?\]\((.*?)\)/i,					// markdown image regex
			/<img.*?src=['"](.*?)['"]/i,	// html image regex

			// -----------------------------------------------------------------------
			
			// @notes: setting as array require escaping `\`
			
			//['!\[.*?\]\((.*?)\)', 'i'],
			//['<img.*?src=[\'"](.*?)[\'"]', 'i'],
			
		],
		
	};

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.get_options_defaults()



/**
 * @return {object}
 */
PLUGIN.get_options = ( $page, plugin_options ) =>
{
	
	const { frontmatter } = $page;

	// ---------------------------------------------------------------------------
	
	// order of options override:
	// - defaults				-> gets set in this file by `PLUGIN.get_default_options()`
	// - plugin options	-> gets set in `config.js`
	// - frontmatter		-> gets set in each page
	
	const options = _.defaultsDeep(
		frontmatter[ PLUGIN.name ],
		plugin_options,
		PLUGIN.get_options_defaults()
	);

	// ---------------------------------------------------------------------------
	
	return options;
	
};
// PLUGIN.get_options()



/**
 * @return {string}
 */
PLUGIN.strip_markup = str => STRIPTAGS( REMOVE_MARKDOWN( str, { useImgAltText: false } ) );



/**
 * @return {RegExp}
 */
PLUGIN.get_regex = re => ( Array.isArray( re ) ) ? new RegExp( ...re ) : re;



/**
 * check if string is a valid url
 * 
 * @param {string} maybe_url
 * @return {bool}
 */
PLUGIN.is_url = ( maybe_url ) =>
{
	
	if ( ! maybe_url || typeof maybe_url !== 'string' )
	{
		return false;
	}

	// ---------------------------------------------------------------------------
	
	const re_protocol_and_domain = /^(?:\w+:)?\/\/(\S+)$/;

	const match = maybe_url.match( re_protocol_and_domain );
	
	if ( ! match )
	{
		return false;
	}

	// ---------------------------------------------------------------------------

	const all_after_protocol = match[1];
	
	if ( ! all_after_protocol )
	{
		return false;
	}

	// ---------------------------------------------------------------------------
	
	const re_domain_localhost			= /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
	const re_domain_non_localhost	= /^[^\s\.]+\.\S{2,}$/;

	return ( 		re_domain_localhost.test( all_after_protocol )
					 || re_domain_non_localhost.test( all_after_protocol ) );
	
}
// PLUGIN.is_url()

/**
 * @return {string}
 */
PLUGIN.get_canonical_url = ( $page, options ) =>
{
	
	if ( options.canonical_base && $page.path )
	{
		return resolveURL( options.canonical_base, $page.path );
	}
	
};
// PLUGIN.get_canonical_url()



/**
 * @return {string}
 */
PLUGIN.get_default_date = ( $page, options ) =>
{
	
	const { frontmatter } = $page;
	
	if ( frontmatter.date )
	{
		return frontmatter.date;
	}
	
};
// PLUGIN.get_default_date()



/**
 * @return {string}
 */
PLUGIN.get_default_title = ( $page, options ) =>
{
	
	// default to page title
	
	let out = $page.title || '';
	
	// ---------------------------------------------------------------------------
	
	// special handling for home
	
	const { frontmatter, _computed } = $page;
	
	if ( frontmatter.home )
	{
		const site = _computed.$site;
		
		// @notes
		// highly unlikely, but i'm falling back to empty string 
		// in case it was intentionally set so that no home title is added
		out = site.title || '';
	}
	
	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.get_default_title()



/**
 * @return {string}
 */
PLUGIN.get_default_description = ( $page, options ) =>
{
	
	// special handling for home
	
	const { frontmatter, _computed } = $page;
	
	if ( frontmatter.home )
	{
		const site				= _computed.$site;
		const description	= site.description || '';
		
		return description;
	}

	// ---------------------------------------------------------------------------
	
	if ( _.isEmpty( options['description_sources'] ) )
	{
		return;
	}

	// ---------------------------------------------------------------------------
	
	let out = '';
	
	for ( const source of options['description_sources'] )
	{
		let found = '';

		// -------------------------------------------------------------------------
		
		switch ( source )
		{
			case 'frontmatter':
				
				if ( $page.frontmatter.description )
				{
					found = $page.frontmatter.description;
				}
				
				break;

			// -----------------------------------------------------------------------
			
			case 'excerpt':
				
				if ( $page.excerpt )
				{
					found = $page.excerpt;
				}
				
				break;

			// -----------------------------------------------------------------------
			
			default:
	
				// content without frontmatter - used with regex
	
				const content = $page._strippedContent || '';
				
				if ( content )
				{
					const regex = PLUGIN.get_regex( source );
					
					let match;
					
					if ( ( match = regex.exec( content ) ) !== null )
					{
						if ( match[1] )
						{
							found = match[1];
						}
					}
				}
				
				break;
		}

		// -------------------------------------------------------------------------
		
		found = PLUGIN.strip_markup( found.trim() );

		// -------------------------------------------------------------------------
		
		if ( found )
		{
			out = found;
			
			break;
		}
	}

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.get_default_description()



/**
 * @return {string}
 */
PLUGIN.get_default_image_url = ( $page, options ) =>
{
	
	if ( _.isEmpty( options['image_sources'] ) )
	{
		return;
	}

	// ---------------------------------------------------------------------------
	
	let out = '';
	
	for ( const source of options['image_sources'] )
	{
		if ( 'frontmatter' === source )
		{
			if ( $page.frontmatter.image )
			{
				out = $page.frontmatter.image;
				
				break;
			}
		}
		else
		{
			// content without frontmatter - used with regex

			const content = $page._strippedContent || '';
			
			if ( ! content )
			{
				break;
			}

			// -----------------------------------------------------------------------
	
			const regex = PLUGIN.get_regex( source );
				
			let match;
			
			if ( ( match = regex.exec( content ) ) !== null )
			{
				if ( match[1] )
				{
					out = match[1];
					
					break;
				}
			}
		}
	}

	// ---------------------------------------------------------------------------
	
	out = out.trim();
	
	if ( ! out )
	{
		return;
	}

	// ---------------------------------------------------------------------------
	
	// support for image url as relative path
	
	if ( PLUGIN.is_url( out ) )
	{
		return out;
	}
	else
	{
		// only return it if we have a base url, 
		// otherwise it's meaningless to add it
		
		if ( options.canonical_base )
		{
			out = resolveURL( options.canonical_base, out );
			
			return out;
		}
	}
	
};
// PLUGIN.get_default_image_url()



/**
 * @return {object}
 */
PLUGIN.get_default_author = ( $page, options ) =>
{
	
	// @consider
	//
	// if author data is empty to default to git author if it has relevant details
	
	return options.author;
	
};
// PLUGIN.get_default_author()



/**
 * @return {object}
 */
PLUGIN.get_default_site = ( $page, options ) =>
{
	
	// @consider to default site name to _computed.$site.title
	
	return options.site;
	
};
// PLUGIN.get_default_site()



/**
 * @return {array}
 */
PLUGIN.default_metas.image = ( $page, default_values ) =>
{
	
	const out = [];

	// ---------------------------------------------------------------------------
	
	if ( default_values.image )
	{
		out.push({
			name		: 'image',
			content	: default_values.image,
		});
	}

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.default_metas.image()



/**
 * @return {array}
 */
PLUGIN.default_metas.twitter = ( $page, default_values ) =>
{
	
	const out = [
		{
			name		: 'twitter:title',
			content	: default_values.title,
		},
		{
			name		: 'twitter:description',
			content	: default_values.description,
		},
	];

	// ---------------------------------------------------------------------------
	
	if ( default_values.image )
	{
		out.push({
			name		: 'twitter:card',
			content	: 'summary_large_image',
		});
		
		out.push({
			name		: 'twitter:image',
			content	: default_values.image,
		});
	}
	else
	{
		out.push({
			name		: 'twitter:card',
			content	: 'summary',
		});
	}

	// ---------------------------------------------------------------------------
	
	if ( default_values.canonical_url )
	{
		out.push({
			name		: 'twitter:url',
			content	: default_values.canonical_url,
		});
	}

	// ---------------------------------------------------------------------------
	
	if ( default_values.author.twitter )
	{
		out.push({
			name		: 'twitter:creator',
			content	: `@${default_values.author.twitter.replace('@', '')}`, // @username
		});
	}

	// ---------------------------------------------------------------------------
	
	if ( default_values.site.twitter )
	{
		out.push({
			name		: 'twitter:site',
			content	: `@${default_values.site.twitter.replace('@', '')}`, // @site_account
		});
	}

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.default_metas.twitter()



/**
 * @return {array}
 */
PLUGIN.default_metas.og = ( $page, default_values ) =>
{
	
	let type = 'article';
	
	const { frontmatter } = $page;
	
	if ( frontmatter.home )
	{
		type = 'website';
	}

	// ---------------------------------------------------------------------------
	
	let out = [
		{
			property: 'og:type',
			content	: type,
		},
		{
			property: 'og:title',
			content	: default_values.title,
		},
		{
			property: 'og:description',
			content	: default_values.description,
		},
	];

	// ---------------------------------------------------------------------------
	
	if ( default_values.image )
	{
		out.push({
			property: 'og:image',
			content	: default_values.image,
		});
	}

	// ---------------------------------------------------------------------------
	
	if ( default_values.canonical_url )
	{
		out.push({
			property: 'og:url',
			content	: default_values.canonical_url,
		});
	}

	// ---------------------------------------------------------------------------
	
	if ( default_values.site.name )
	{
		out.push({
			property: 'og:site_name',
			content	: default_values.site.name,
		});
	}

	// ---------------------------------------------------------------------------
	
	// og article related
	
	if ( 'article' === type )
	{
		if ( default_values.author.name )
		{
			out.push({
				property: 'article:author',
				content	: default_values.author.name,
			});
		}

		// -------------------------------------------------------------------------
		
		if ( default_values.date )
		{
			out.push({
				property: 'article:published_time',
				content	: default_values.date,
			});
		}

		// -------------------------------------------------------------------------
		
		// @consider article:modified_time

		// -------------------------------------------------------------------------
		
		if ( 		! _.isEmpty( frontmatter.tags )
				 && Array.isArray( frontmatter.tags ) )
		{
			for ( const tag of frontmatter.tags )
			{
				out.push({
					property: 'article:tag',
					content	: tag,
				});
			}
		}
	}

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.default_metas.og()



/**
 * @return {array}
 */
PLUGIN.default_metas.schema = ( $page, default_values ) =>
{
	
	const out = [
		{
			itemprop: 'name',
			content	: default_values.title,
		},
		{
			itemprop: 'description',
			content	: default_values.description,
		},
	];

	// ---------------------------------------------------------------------------
	
	if ( default_values.image )
	{
		out.push({
			itemprop: 'image',
			content	: default_values.image,
		});
	}

	// ---------------------------------------------------------------------------
	
	// @todo:
	// check if these meta tags require the `itemscope` and `itemtype` attributes 
	// to be added to <html> tag

	// ---------------------------------------------------------------------------
	
	return out;
	
};
// PLUGIN.default_metas.schema()



/**
 * @return {array}
 */
PLUGIN.default_meta_tags = ( $page, default_values, options ) =>
{
	
	let out = [];

	// ---------------------------------------------------------------------------
	
	const keys = Object.keys( PLUGIN.default_metas );
	
	for ( const key of keys )
	{
		if ( options[ key ] )
		{
			out = out.concat( PLUGIN.default_metas[ key ]( $page, default_values ) );
		}
	}

	// ---------------------------------------------------------------------------
	
	return out.filter( e => e );
	
};
// PLUGIN.default_meta_tags()

// -----------------------------------------------------------------------------

module.exports = ( plugin_options, context ) => ({

	extendPageData ( $page ) {
		
		const { frontmatter } = $page;
		
		// -------------------------------------------------------------------------
		
		const options = PLUGIN.get_options( $page, plugin_options );
		
		if ( ! options.enable )
		{
			return;
		}

		// -------------------------------------------------------------------------
		
		frontmatter.description = frontmatter.description || PLUGIN.get_default_description( $page, options );

		// -------------------------------------------------------------------------
		
		const default_values = {
			title					: PLUGIN.get_default_title( $page, options ),
			date					: PLUGIN.get_default_date( $page, options ),
			description		: frontmatter.description,
			image_url			: PLUGIN.get_default_image_url( $page, options ),
			canonical_url	: PLUGIN.get_canonical_url( $page, options ),
			author				: PLUGIN.get_default_author( $page, options ),
			site					: PLUGIN.get_default_site( $page, options ),
		};
		
		default_values.image			= default_values.image_url;
		default_values.canonical	= default_values.canonical_url;

		// -------------------------------------------------------------------------
		
		const default_metas = PLUGIN.default_meta_tags( $page, default_values, options );
		
		if ( _.isEmpty( default_metas ) )
		{
			return;
		}

		// -------------------------------------------------------------------------
		
		frontmatter.meta = frontmatter.meta || [];
		
		for ( const meta of default_metas )
		{
			// only add it if not already set in frontmatter
			
			const index = _.findIndex( frontmatter.meta, ['name', meta.name] );
			
			if ( index === -1 )
			{
				frontmatter.meta.push( meta );
			}
		}

	}

});
