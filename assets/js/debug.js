// Use either console.group or console.groupCollapsed.


// Page methods.

console.groupCollapsed('PAGE METHODS');
console.log('Aliases: {{ .Aliases }}');
console.log('AllTranslations: {{ .AllTranslations }}');
console.log('AlternativeOutputFormats: {{ .AlternativeOutputFormats }}');
console.log('Ancestors: {{ .Ancestors }}');
console.log('BundleType: {{ .BundleType }}');
console.log('CodeOwners: {{ .CodeOwners }}');
console.log('CurrentSection: {{ .CurrentSection }}');
console.groupCollapsed('Data (applicable to taxonomy and term pages)');
  console.log('Data.Singular: {{ .Data.Singular }}');
  console.log('Data.Plural: {{ .Data.Plural }}');
  console.log('Data.Term: {{ .Data.Term }}');
  console.log('Data.Terms: {{ .Data.Terms }}');
console.groupEnd();
console.log('Date: {{ .Date }}');
console.log('Description: {{ .Description }}');
console.log('Draft: {{ .Draft }}');
console.log('ExpiryDate: {{ .ExpiryDate }}');
{{ if .File }}
  console.groupCollapsed('File');
    console.log('File.BaseFileName: {{ .File.BaseFileName }}');
    console.log('File.ContentBaseName: {{ .File.ContentBaseName }}');
    console.log('File.Dir: {{ .File.Dir }}');
    console.log('File.Ext: {{ .File.Ext }}');
    console.log('File.Filename: {{ .File.Filename }}');
    console.log('File.IsContentAdapter: {{ .File.IsContentAdapter }}');
    console.log('File.LogicalName: {{ .File.LogicalName }}');
    console.log('File.Path: {{ .File.Path }}');
    console.log('File.Section: {{ .File.Section }}');
    console.log('File.TranslationBaseName: {{ .File.TranslationBaseName }}');
    console.log('File.UniqueID: {{ .File.UniqueID }}');
  console.groupEnd();
{{ end }}
console.log('FirstSection: {{ .FirstSection }}');
console.groupCollapsed('Fragments');
  console.group('Fragments.Headings');
    console.log(`{{ .Fragments.Headings | jsonify (dict "indent" "  ") }}`);
  console.groupEnd();
  console.group('Fragments.HeadingsMap');
    console.log(`{{ .Fragments.HeadingsMap | jsonify (dict "indent" "  ") }}`);
  console.groupEnd();
  console.group('Fragments.Identifiers');
    console.log(`{{ .Fragments.Identifiers | jsonify (dict "indent" "  ") }}`);
  console.groupEnd();
console.groupEnd();
console.log('FuzzyWordCount: {{ .FuzzyWordCount }}');
{{ if .GitInfo }}
  console.groupCollapsed('GitInfo');
    console.log('GitInfo.AbbreviatedHash: {{ .GitInfo.AbbreviatedHash }}');
    console.log('GitInfo.Ancestors: {{ .GitInfo.Ancestors }}');
    console.log('GitInfo.AuthorDate: {{ .GitInfo.AuthorDate }}');
    console.log('GitInfo.AuthorEmail: {{ .GitInfo.AuthorEmail }}');
    console.log('GitInfo.AuthorName: {{ .GitInfo.AuthorName }}');
    console.log('GitInfo.Body: {{ .GitInfo.Body }}');
    console.log('GitInfo.CommitDate: {{ .GitInfo.CommitDate }}');
    console.log('GitInfo.Hash: {{ .GitInfo.Hash }}');
    console.log('GitInfo.Parent: {{ .GitInfo.Parent }}');
    console.log('GitInfo.Subject: {{ .GitInfo.Subject }}');
  console.groupEnd();
{{ end }}
console.log('IsHome: {{ .IsHome }}');
console.log('IsNode: {{ .IsNode }}');
console.log('IsPage: {{ .IsPage }}');
console.log('IsSection: {{ .IsSection }}');
console.log('IsTranslated: {{ .IsTranslated }}');
console.log('Keywords: {{ .Keywords }}');
console.log('Kind: {{ .Kind }}');
console.groupCollapsed('Language');
  console.log('Language.Lang: {{ .Language.Lang }}');
  console.log('Language.LanguageCode: {{ .Language.LanguageCode }}');
  console.log('Language.LanguageDirection: {{ .Language.LanguageDirection }}');
  console.log('Language.LanguageName: {{ .Language.LanguageName }}');
  console.log('Language.Weight: {{ .Language.Weight }}');
console.groupEnd();
console.log('Lastmod: {{ .Lastmod }}');
console.log('Layout: {{ .Layout }}');
console.log('Len: {{ .Len }}');
console.log('LinkTitle: {{ .LinkTitle }}');
console.log('Next: {{ .Next }}');
console.log('NextInSection: {{ .NextInSection }}');
console.log('Pages: {{ .Pages }}');
console.log('Parent: {{ .Parent }}');
console.log('Path: {{ .Path }}');
console.log('Permalink: {{ .Permalink }}');
console.log('Prev: {{ .Prev }}');
console.log('PrevInSection: {{ .PrevInSection }}');
console.log('PublishDate: {{ .PublishDate }}');
console.log('ReadingTime: {{ .ReadingTime }}');
console.log('RegularPages: {{ .RegularPages }}');
console.log('RegularPagesRecursive: {{ .RegularPagesRecursive }}');
console.log('RelPermalink: {{ .RelPermalink }}');
console.log('Resources: {{ .Resources }}');
console.log('Section: {{ .Section }}');
console.log('Sections: {{ .Sections }}');
console.log('Slug: {{ .Slug }}');
console.log('Title: {{ .Title }}');
console.log('TranslationKey: {{ .TranslationKey }}');
console.log('Translations: {{ .Translations }}');
console.log('Truncated: {{ .Truncated }}');
console.log('Type: {{ .Type }}');
console.log('Weight: {{ .Weight }}');
console.log('WordCount: {{ .WordCount }}');
console.groupEnd();

// Site methods.

console.groupCollapsed('SITE METHODS');
console.log('AllPages: {{ .Site.AllPages }}');
console.log('BaseURL: {{ .Site.BaseURL }}');
console.log('BuildDrafts: {{ .Site.BuildDrafts }}');
console.groupCollapsed('Config');
  console.log(`{{ .Site.Config | jsonify (dict "indent" "  ") }}`);
console.groupEnd();
console.log('Copyright: {{ .Site.Copyright }}');
console.log('Home: {{ .Site.Home }}');
console.groupCollapsed('Language');
  console.log('Language.Lang: {{ .Site.Language.Lang }}');
  console.log('Language.LanguageCode: {{ .Site.Language.LanguageCode }}');
  console.log('Language.LanguageDirection: {{ .Site.Language.LanguageDirection }}');
  console.log('Language.LanguageName: {{ .Site.Language.LanguageName }}');
  console.log('Language.Weight: {{ .Site.Language.Weight }}');
console.groupEnd();
console.log('LanguagePrefix: {{ .Site.LanguagePrefix }}');
console.log('Languages: {{ .Site.Languages }}');
console.log('Lastmod: {{ .Site.Lastmod }}');
console.log('MainSections: {{ .Site.MainSections}}');
console.log('Menus: {{ .Site.Menus}}');
console.log('Pages: {{ .Site.Pages }}');
console.log('RegularPages: {{ .Site.RegularPages }}');
console.log('Sections: {{ .Site.Sections }}');
console.log('Sites: {{ .Site.Sites }}');
console.log('Taxonomies: {{ .Site.Taxonomies }}');
console.log('Title: {{ .Site.Title }}');
console.groupEnd();

// Page params.

console.groupCollapsed('PAGE PARAMS');
  console.log(`{{ .Params | jsonify (dict "indent" "  ") }}`);
console.groupEnd();

// Site params.

console.groupCollapsed('SITE PARAMS');
  console.log(`{{ .Site.Params | jsonify (dict "indent" "  ") }}`);
console.groupEnd('SITE PARAMS');

// Other.

console.groupCollapsed('MISCELLANEOUS');
  console.log('hugo.BuildDate: {{ hugo.BuildDate }}');
  console.log('hugo.CommitHash: {{ hugo.CommitHash }}');
  console.log('hugo.Environment: {{ hugo.Environment }}');
  console.log('hugo.Generator: {{ hugo.Generator }}');
  console.log('hugo.GoVersion: {{ hugo.GoVersion }}');
  console.log('hugo.IsDevelopment: {{ hugo.IsDevelopment }}');
  console.log('hugo.IsExtended: {{ hugo.IsExtended }}');
  console.log('hugo.IsMultihost: {{ hugo.IsMultihost }}');
  console.log('hugo.IsMultilingual: {{ hugo.IsMultilingual }}');
  console.log('hugo.IsProduction: {{ hugo.IsProduction }}');
  console.log('hugo.IsServer: {{ hugo.IsServer }}');
  console.log('hugo.Version: {{ hugo.Version }}');
  console.log('hugo.WorkingDir: {{ hugo.WorkingDir }}');
console.groupEnd();
