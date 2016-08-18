function configure(bundle) {
  "use strict";
  bundle.description = 'Boot a terminal in a new browser window.';
  bundle.versions = {
    'oma-delta': '10.0.x',
    'oma-ui': '10.0.x'
  };
  bundle.includes = [
    'Std.Delta.Types', 'Std.Delta.Core',
    'Std.Terminal.Core',
    'Std.UI.Types', 'Std.UI.Core'
  ];
}