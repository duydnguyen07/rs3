module.exports = {
  name: 'rs3-tool',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rs3-tool',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
