&lt;sortable-table&gt;
================

Polymer Web Component that generates a sortable &lt;table&gt; from JSON.

There are many capable Javascript grids, this one aims to have all the same features plus:
- **leverage native browser support for `template` to be fully customizable,** and
- **be declaratively configurable through DOM and require no Javascript to use**.

## Built-In Table Features

- Click column headers to sort
- Drag-and-Drop columns to reorder
- Edit rows with multi-row Undo
- Row paging, checkbox selection, and multi-select
- Supports table, single row/article, and flowing grid layouts
- Use of HTML5 `template` for customization (Cells, Rows, Column Headers and Footers)
- 2-way data binding with the outside world
- Separate argument input for metadata, presentation and value calculation in all templates
- Local or remote data: AJAX support from server-side pagination

### Themes

#### Bootstrap

![Bootstrap](https://raw.githubusercontent.com/stevenrskelton/sortable-table/master/examples/themes/bootstrap-theme.png "Bootstrap")

#### ExtJS 4

![ExtJS4](https://raw.githubusercontent.com/stevenrskelton/sortable-table/master/examples/themes/extjs4-theme.png "ExtJS 4")

#### ESPN

![ESPN](https://raw.githubusercontent.com/stevenrskelton/sortable-table/master/examples/themes/espn-theme.png "ESPN")

### Alternative Row / Non-Table Themes

#### Article

![Article](https://raw.githubusercontent.com/stevenrskelton/sortable-table/master/examples/themes/article-theme.png "Article")

#### Article in Grid Mode

![Article in Grid Mode](https://raw.githubusercontent.com/stevenrskelton/sortable-table/master/examples/themes/article-theme-grid.png "Article in Grid Mode")

## Live Examples and Documentation

> [Themes](http://files.stevenskelton.ca/sortable-table/examples/themes/index.html)

> [Alternative Row Themes](http://files.stevenskelton.ca/sortable-table/examples/themes/alt.html)

> [Row Editor with Undo Functionality](http://files.stevenskelton.ca/sortable-table/examples/row-editor.html)

> [Additional Arguments](http://files.stevenskelton.ca/sortable-table/examples/args.html)

> [Data Formats](http://files.stevenskelton.ca/sortable-table/examples/data-formats.html)

> [DOM Elements](http://files.stevenskelton.ca/sortable-table/examples/dom-elements.html)

> [AJAX, Server-Side Pagination](http://files.stevenskelton.ca/sortable-table/examples/serverside/index.html)

> [Auto-Generated Columns](http://files.stevenskelton.ca/sortable-table/examples/autogenerated-columns.html)

> [Row Templates](http://files.stevenskelton.ca/sortable-table/examples/row-templates.html)

> [Selected Rows, Multi-Select](http://files.stevenskelton.ca/sortable-table/examples/selected-rows.html)

> [Dynamically Changing Columns and Templates](http://files.stevenskelton.ca/sortable-table/examples/dynamic-columns.html)

> [Paging, Top-N Rows](http://files.stevenskelton.ca/sortable-table/examples/paging.html)

## Usage

1. Add the library using the Javascript package manager [Bower](http://bower.io/):

	```bower install --save sortable-table```

2. Import Web Components' polyfill:

	```html
	<script src="bower_components/platform/platform.js"></script>
	```

3. Import Custom Element:

	```html
	<link rel="import" href="bower_components/sortable-table/sortable-table.html">
	```

4. Import a theme, like the [Bootstrap](http://getbootstrap.com/) compatible theme _(Optional)_:

	```html
	<link rel="stylesheet" href="../css/bootstrap.css" shim-shadowdom>
	```
	And include `class="bootstrap"` on any `sortable-table` to apply.

5. Start using it!

	Start simple and use DOM to configure the grid:

	```html
	<sortable-table>
		<sortable-column>fruit</sortable-column>
		<sortable-column>alice</sortable-column>
		<sortable-column>bill</sortable-column>
		<sortable-column>casey</sortable-column>
		<!-- data case be either an Array, JSON, or JSON5 -->
		[
			[ "apple", 4, 10, 2 ],
			[ "banana", 0, 4, 0 ],
			[ "grape", 2, 3, 5 ],
			[ "pear", 4, 2, 8 ],
			[ "strawberry", 0, 14, 0 ]
		]
	</sortable-table>
	```

	Or use Javascript attributes:

	```html
	<sortable-table columns='["fruit","alice","bill","casey"]' data='[
			[ "apple", 4, 10, 2 ],
			[ "banana", 0, 4, 0 ],
			[ "grape", 2, 3, 5 ],
			[ "pear", 4, 2, 8 ],
			[ "strawberry", 0, 14, 0 ] ]'>
	</sortable-table>
	```

	Or take advanced control with custom templates, 2-way data binding, and a remote datasource:

	```html
	<sortable-table columns="{{columns}}">
		<!-- add templates here -->
		<!-- add remote datasource here -->
	</sortable-table>
	```

## History

For detailed changelog, check [Releases](https://github.com/stevenrskelton/sortable-table/releases).

## License
[MIT License](http://opensource.org/licenses/MIT) © Steven Skelton