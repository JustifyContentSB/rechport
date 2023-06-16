import mode from './mode';

const paths = {
  templates: `${origin}/templates`,
  markers: `${origin}/images/markers`,
};

if (mode === 'demo') {
  paths.templates = '/rechport/templates';
  paths.markers = '/rechport/images/markers';
}

if (mode === 'build') {
  paths.templates = '/local/templates/main/build/templates';
  paths.markers = '/local/templates/main/build/images/markers';
}

export default paths;
