var x3djson_Module_Factory = function () {
  var x3djson = {
    n: 'x3djson',
    tis: [{
        ln: 'X3DDamperNode',
        bti: '.X3DFollowerNode',
        ps: [{
            n: 'tau',
            ti: 'Double',
            an: {
              lp: 'tau'
            },
            t: 'a'
          }, {
            n: 'tolerance',
            ti: 'Float',
            an: {
              lp: 'tolerance'
            },
            t: 'a'
          }, {
            n: 'order',
            ti: 'Int',
            an: {
              lp: 'order'
            },
            t: 'a'
          }]
      }, {
        ln: 'ShaderProgram',
        tn: null,
        bti: '.X3DNodeMixedContent',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordinateInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DCoordinateNode',
        bti: '.X3DGeometricPropertyNode'
      }, {
        ln: 'ImageCubeMapTexture',
        tn: null,
        bti: '.X3DEnvironmentTextureNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'NavigationInfo',
        tn: null,
        bti: '.X3DBindableNode',
        ps: [{
            n: 'avatarSize',
            an: {
              lp: 'avatarSize'
            },
            t: 'a'
          }, {
            n: 'headlight',
            ti: 'Boolean',
            an: {
              lp: 'headlight'
            },
            t: 'a'
          }, {
            n: 'speed',
            ti: 'Float',
            an: {
              lp: 'speed'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'transitionType',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'transitionType'
            },
            t: 'a'
          }, {
            n: 'transitionTime',
            ti: 'Double',
            an: {
              lp: 'transitionTime'
            },
            t: 'a'
          }, {
            n: 'visibilityLimit',
            ti: 'Float',
            an: {
              lp: 'visibilityLimit'
            },
            t: 'a'
          }]
      }, {
        ln: 'FontStyle',
        tn: null,
        bti: '.X3DFontStyleNode',
        ps: [{
            n: 'family',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'family'
            },
            t: 'a'
          }, {
            n: 'horizontal',
            ti: 'Boolean',
            an: {
              lp: 'horizontal'
            },
            t: 'a'
          }, {
            n: 'justify',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'justify'
            },
            t: 'a'
          }, {
            n: 'language',
            an: {
              lp: 'language'
            },
            t: 'a'
          }, {
            n: 'leftToRight',
            ti: 'Boolean',
            an: {
              lp: 'leftToRight'
            },
            t: 'a'
          }, {
            n: 'size',
            ti: 'Float',
            an: {
              lp: 'size'
            },
            t: 'a'
          }, {
            n: 'spacing',
            ti: 'Float',
            an: {
              lp: 'spacing'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'topToBottom',
            ti: 'Boolean',
            an: {
              lp: 'topToBottom'
            },
            t: 'a'
          }]
      }, {
        ln: 'NormalInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'IsoSurfaceVolumeData',
        tn: null,
        bti: '.X3DVolumeDataNode',
        ps: [{
            n: 'composedTexture3DOrImageTexture3DOrPixelTexture3D',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'BlendedVolumeStyle'
                },
                ti: '.BlendedVolumeStyle'
              }, {
                en: {
                  lp: 'BoundaryEnhancementVolumeStyle'
                },
                ti: '.BoundaryEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'CartoonVolumeStyle'
                },
                ti: '.CartoonVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedVolumeStyle'
                },
                ti: '.ComposedVolumeStyle'
              }, {
                en: {
                  lp: 'EdgeEnhancementVolumeStyle'
                },
                ti: '.EdgeEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'OpacityMapVolumeStyle'
                },
                ti: '.OpacityMapVolumeStyle'
              }, {
                en: {
                  lp: 'ProjectionVolumeStyle'
                },
                ti: '.ProjectionVolumeStyle'
              }, {
                en: {
                  lp: 'ShadedVolumeStyle'
                },
                ti: '.ShadedVolumeStyle'
              }, {
                en: {
                  lp: 'SilhouetteEnhancementVolumeStyle'
                },
                ti: '.SilhouetteEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ToneMappedVolumeStyle'
                },
                ti: '.ToneMappedVolumeStyle'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'contourStepSize',
            ti: 'Float',
            an: {
              lp: 'contourStepSize'
            },
            t: 'a'
          }, {
            n: 'surfaceTolerance',
            ti: 'Float',
            an: {
              lp: 'surfaceTolerance'
            },
            t: 'a'
          }, {
            n: 'surfaceValues',
            an: {
              lp: 'surfaceValues'
            },
            t: 'a'
          }]
      }, {
        ln: 'VisibilitySensor',
        tn: null,
        bti: '.X3DEnvironmentalSensorNode'
      }, {
        ln: 'AudioClip',
        tn: null,
        bti: '.X3DSoundSourceNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureTransform3D',
        tn: null,
        bti: '.X3DTextureTransformNode',
        ps: [{
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'Layout',
        tn: null,
        bti: '.X3DLayoutNode',
        ps: [{
            n: 'align',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: 'offset',
            an: {
              lp: 'offset'
            },
            t: 'a'
          }, {
            n: 'offsetUnits',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'offsetUnits'
            },
            t: 'a'
          }, {
            n: 'scaleMode',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'scaleMode'
            },
            t: 'a'
          }, {
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }, {
            n: 'sizeUnits',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'sizeUnits'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DShapeNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'IndexedTriangleStripSet'
                },
                ti: '.IndexedTriangleStripSet'
              }, {
                en: {
                  lp: 'ArcClose2D'
                },
                ti: '.ArcClose2D'
              }, {
                en: {
                  lp: 'Cone'
                },
                ti: '.Cone'
              }, {
                en: {
                  lp: 'TriangleSet'
                },
                ti: '.TriangleSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'Circle2D'
                },
                ti: '.Circle2D'
              }, {
                en: {
                  lp: 'TriangleFanSet'
                },
                ti: '.TriangleFanSet'
              }, {
                en: {
                  lp: 'TriangleSet2D'
                },
                ti: '.TriangleSet2D'
              }, {
                en: {
                  lp: 'IndexedLineSet'
                },
                ti: '.IndexedLineSet'
              }, {
                en: {
                  lp: 'Extrusion'
                },
                ti: '.Extrusion'
              }, {
                en: {
                  lp: 'IndexedQuadSet'
                },
                ti: '.IndexedQuadSet'
              }, {
                en: {
                  lp: 'ElevationGrid'
                },
                ti: '.ElevationGrid'
              }, {
                en: {
                  lp: 'Arc2D'
                },
                ti: '.Arc2D'
              }, {
                en: {
                  lp: 'LineSet'
                },
                ti: '.LineSet'
              }, {
                en: {
                  lp: 'IndexedTriangleFanSet'
                },
                ti: '.IndexedTriangleFanSet'
              }, {
                en: {
                  lp: 'Polyline2D'
                },
                ti: '.Polyline2D'
              }, {
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'IndexedTriangleSet'
                },
                ti: '.IndexedTriangleSet'
              }, {
                en: {
                  lp: 'IndexedFaceSet'
                },
                ti: '.IndexedFaceSet'
              }, {
                en: {
                  lp: 'QuadSet'
                },
                ti: '.QuadSet'
              }, {
                en: {
                  lp: 'Disk2D'
                },
                ti: '.Disk2D'
              }, {
                en: {
                  lp: 'Cylinder'
                },
                ti: '.Cylinder'
              }, {
                en: {
                  lp: 'Rectangle2D'
                },
                ti: '.Rectangle2D'
              }, {
                en: {
                  lp: 'Text'
                },
                ti: '.Text'
              }, {
                en: {
                  lp: 'Box'
                },
                ti: '.Box'
              }, {
                en: {
                  lp: 'TriangleStripSet'
                },
                ti: '.TriangleStripSet'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'NurbsCurve'
                },
                ti: '.NurbsCurve'
              }, {
                en: {
                  lp: 'Sphere'
                },
                ti: '.Sphere'
              }, {
                en: {
                  lp: 'Polypoint2D'
                },
                ti: '.Polypoint2D'
              }, {
                en: {
                  lp: 'GeoElevationGrid'
                },
                ti: '.GeoElevationGrid'
              }, {
                en: {
                  lp: 'PointSet'
                },
                ti: '.PointSet'
              }, {
                en: {
                  lp: 'Appearance'
                },
                ti: '.Appearance'
              }],
            t: 'ers'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'Text',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'fontStyle',
            rq: true,
            en: {
              lp: 'FontStyle'
            },
            ti: '.FontStyle'
          }, {
            n: 'screenFontStyle',
            rq: true,
            en: {
              lp: 'ScreenFontStyle'
            },
            ti: '.ScreenFontStyle'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'string',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'string'
            },
            t: 'a'
          }, {
            n: 'length',
            an: {
              lp: 'length'
            },
            t: 'a'
          }, {
            n: 'maxExtent',
            ti: 'Float',
            an: {
              lp: 'maxExtent'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'TouchSensor',
        tn: null,
        bti: '.X3DTouchSensorNode'
      }, {
        ln: 'Collision',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }]
      }, {
        ln: 'ElevationGrid',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'floatVertexAttributeOrMatrix3VertexAttributeOrMatrix4VertexAttribute',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FloatVertexAttribute'
                },
                ti: '.FloatVertexAttribute'
              }, {
                en: {
                  lp: 'Matrix3VertexAttribute'
                },
                ti: '.Matrix3VertexAttribute'
              }, {
                en: {
                  lp: 'Matrix4VertexAttribute'
                },
                ti: '.Matrix4VertexAttribute'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'FogCoordinate'
                },
                ti: '.FogCoordinate'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'TextureCoordinate3D'
                },
                ti: '.TextureCoordinate3D'
              }, {
                en: {
                  lp: 'TextureCoordinate4D'
                },
                ti: '.TextureCoordinate4D'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'MultiTextureCoordinate'
                },
                ti: '.MultiTextureCoordinate'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'height',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'colorPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'colorPerVertex'
            },
            t: 'a'
          }, {
            n: 'creaseAngle',
            ti: 'Float',
            an: {
              lp: 'creaseAngle'
            },
            t: 'a'
          }, {
            n: 'normalPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'normalPerVertex'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }, {
            n: 'xDimension',
            ti: 'Integer',
            an: {
              lp: 'xDimension'
            },
            t: 'a'
          }, {
            n: 'xSpacing',
            ti: 'Float',
            an: {
              lp: 'xSpacing'
            },
            t: 'a'
          }, {
            n: 'zDimension',
            ti: 'Integer',
            an: {
              lp: 'zDimension'
            },
            t: 'a'
          }, {
            n: 'zSpacing',
            ti: 'Float',
            an: {
              lp: 'zSpacing'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureCoordinate3D',
        tn: null,
        bti: '.X3DTextureCoordinateNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }]
      }, {
        ln: 'DISEntityManager',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'disEntityTypeMappingOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'DISEntityTypeMapping'
                },
                ti: '.DISEntityTypeMapping'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }, {
            n: 'applicationID',
            ti: 'Integer',
            an: {
              lp: 'applicationID'
            },
            t: 'a'
          }, {
            n: 'port',
            ti: 'Integer',
            an: {
              lp: 'port'
            },
            t: 'a'
          }, {
            n: 'siteID',
            ti: 'Integer',
            an: {
              lp: 'siteID'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataString',
        tn: null,
        bti: '.X3DMetadataObject',
        ps: [{
            n: 'value',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'Cone',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'bottomRadius',
            ti: 'Float',
            an: {
              lp: 'bottomRadius'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Float',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'side',
            ti: 'Boolean',
            an: {
              lp: 'side'
            },
            t: 'a'
          }, {
            n: 'bottom',
            ti: 'Boolean',
            an: {
              lp: 'bottom'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProjectionVolumeStyle',
        tn: null,
        bti: '.X3DVolumeRenderStyleNode',
        ps: [{
            n: 'intensityThreshold',
            ti: 'Float',
            an: {
              lp: 'intensityThreshold'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'VolumeData',
        tn: null,
        bti: '.X3DVolumeDataNode',
        ps: [{
            n: 'rest',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'BoundaryEnhancementVolumeStyle'
                },
                ti: '.BoundaryEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ShadedVolumeStyle'
                },
                ti: '.ShadedVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedVolumeStyle'
                },
                ti: '.ComposedVolumeStyle'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'BlendedVolumeStyle'
                },
                ti: '.BlendedVolumeStyle'
              }, {
                en: {
                  lp: 'SilhouetteEnhancementVolumeStyle'
                },
                ti: '.SilhouetteEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ProjectionVolumeStyle'
                },
                ti: '.ProjectionVolumeStyle'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'CartoonVolumeStyle'
                },
                ti: '.CartoonVolumeStyle'
              }, {
                en: {
                  lp: 'ToneMappedVolumeStyle'
                },
                ti: '.ToneMappedVolumeStyle'
              }, {
                en: {
                  lp: 'OpacityMapVolumeStyle'
                },
                ti: '.OpacityMapVolumeStyle'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'EdgeEnhancementVolumeStyle'
                },
                ti: '.EdgeEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'NurbsPatchSurface',
        tn: null,
        bti: '.X3DNurbsSurfaceGeometryNode',
        ps: [{
            n: 'coordinateOrCoordinateDoubleOrTextureCoordinate',
            mno: 0,
            mxo: 2,
            col: true,
            etis: [{
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'WorldInfo',
        tn: null,
        bti: '.X3DInfoNode',
        ps: [{
            n: 'info',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'info'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsTrimmedSurface',
        tn: null,
        bti: '.X3DNurbsSurfaceGeometryNode',
        ps: [{
            n: 'contour2DOrCoordinateOrCoordinateDouble',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Contour2D'
                },
                ti: '.Contour2D'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'EXPORT',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'localDEF',
            rq: true,
            ti: 'IDREF',
            an: {
              lp: 'localDEF'
            },
            t: 'a'
          }, {
            n: 'as',
            an: {
              lp: 'AS'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointSet',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Rectangle2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DSensorNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }]
      }, {
        ln: 'Extrusion',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'beginCap',
            ti: 'Boolean',
            an: {
              lp: 'beginCap'
            },
            t: 'a'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'convex',
            ti: 'Boolean',
            an: {
              lp: 'convex'
            },
            t: 'a'
          }, {
            n: 'creaseAngle',
            ti: 'Float',
            an: {
              lp: 'creaseAngle'
            },
            t: 'a'
          }, {
            n: 'crossSection',
            an: {
              lp: 'crossSection'
            },
            t: 'a'
          }, {
            n: 'endCap',
            ti: 'Boolean',
            an: {
              lp: 'endCap'
            },
            t: 'a'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }, {
            n: 'spine',
            an: {
              lp: 'spine'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }]
      }, {
        ln: 'BooleanToggle',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'toggle',
            ti: 'Boolean',
            an: {
              lp: 'toggle'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DFontStyleNode',
        bti: '.X3DNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Material',
        tn: null,
        bti: '.X3DMaterialNode',
        ps: [{
            n: 'ambientIntensity',
            ti: 'Float',
            an: {
              lp: 'ambientIntensity'
            },
            t: 'a'
          }, {
            n: 'diffuseColor',
            an: {
              lp: 'diffuseColor'
            },
            t: 'a'
          }, {
            n: 'emissiveColor',
            an: {
              lp: 'emissiveColor'
            },
            t: 'a'
          }, {
            n: 'shininess',
            ti: 'Float',
            an: {
              lp: 'shininess'
            },
            t: 'a'
          }, {
            n: 'specularColor',
            an: {
              lp: 'specularColor'
            },
            t: 'a'
          }, {
            n: 'transparency',
            ti: 'Float',
            an: {
              lp: 'transparency'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsPositionInterpolator',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'knot',
            an: {
              lp: 'knot'
            },
            t: 'a'
          }, {
            n: 'order',
            ti: 'Integer',
            an: {
              lp: 'order'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DLightNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'ambientIntensity',
            ti: 'Float',
            an: {
              lp: 'ambientIntensity'
            },
            t: 'a'
          }, {
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'intensity',
            ti: 'Float',
            an: {
              lp: 'intensity'
            },
            t: 'a'
          }, {
            n: 'on',
            ti: 'Boolean',
            an: {
              lp: 'on'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DVertexAttributeNode',
        bti: '.X3DGeometricPropertyNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DBindableNode',
        bti: '.X3DChildNode'
      }, {
        ln: 'Meta',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'content',
            rq: true,
            an: {
              lp: 'content'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'httpEquiv',
            an: {
              lp: 'http-equiv'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'scheme',
            an: {
              lp: 'scheme'
            },
            t: 'a'
          }]
      }, {
        ln: 'Background',
        tn: null,
        bti: '.X3DBackgroundNode',
        ps: [{
            n: 'backUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'backUrl'
            },
            t: 'a'
          }, {
            n: 'bottomUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'bottomUrl'
            },
            t: 'a'
          }, {
            n: 'frontUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'frontUrl'
            },
            t: 'a'
          }, {
            n: 'leftUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'leftUrl'
            },
            t: 'a'
          }, {
            n: 'rightUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'rightUrl'
            },
            t: 'a'
          }, {
            n: 'topUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'topUrl'
            },
            t: 'a'
          }]
      }, {
        ln: 'ConeEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'angle',
            ti: 'Float',
            an: {
              lp: 'angle'
            },
            t: 'a'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComposedCubeMapTexture',
        tn: null,
        bti: '.X3DEnvironmentTextureNode',
        ps: [{
            n: 'imageTextureOrPixelTextureOrMovieTexture',
            mno: 0,
            mxo: 6,
            col: true,
            etis: [{
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'TextureCoordinate',
        tn: null,
        bti: '.X3DTextureCoordinateNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }]
      }, {
        ln: 'BlendedVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'imageTextureOrPixelTextureOrMovieTexture',
            mno: 0,
            mxo: 4,
            col: true,
            etis: [{
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'BlendedVolumeStyle'
                },
                ti: '.BlendedVolumeStyle'
              }, {
                en: {
                  lp: 'BoundaryEnhancementVolumeStyle'
                },
                ti: '.BoundaryEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'CartoonVolumeStyle'
                },
                ti: '.CartoonVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedVolumeStyle'
                },
                ti: '.ComposedVolumeStyle'
              }, {
                en: {
                  lp: 'EdgeEnhancementVolumeStyle'
                },
                ti: '.EdgeEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'OpacityMapVolumeStyle'
                },
                ti: '.OpacityMapVolumeStyle'
              }, {
                en: {
                  lp: 'ProjectionVolumeStyle'
                },
                ti: '.ProjectionVolumeStyle'
              }, {
                en: {
                  lp: 'ShadedVolumeStyle'
                },
                ti: '.ShadedVolumeStyle'
              }, {
                en: {
                  lp: 'SilhouetteEnhancementVolumeStyle'
                },
                ti: '.SilhouetteEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ToneMappedVolumeStyle'
                },
                ti: '.ToneMappedVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'weightConstant1',
            ti: 'Float',
            an: {
              lp: 'weightConstant1'
            },
            t: 'a'
          }, {
            n: 'weightConstant2',
            ti: 'Float',
            an: {
              lp: 'weightConstant2'
            },
            t: 'a'
          }, {
            n: 'weightFunction1',
            an: {
              lp: 'weightFunction1'
            },
            t: 'a'
          }, {
            n: 'weightFunction2',
            an: {
              lp: 'weightFunction2'
            },
            t: 'a'
          }]
      }, {
        ln: 'SingleAxisHingeJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'anchorPoint',
            an: {
              lp: 'anchorPoint'
            },
            t: 'a'
          }, {
            n: 'axis',
            an: {
              lp: 'axis'
            },
            t: 'a'
          }, {
            n: 'maxAngle',
            ti: 'Float',
            an: {
              lp: 'maxAngle'
            },
            t: 'a'
          }, {
            n: 'minAngle',
            ti: 'Float',
            an: {
              lp: 'minAngle'
            },
            t: 'a'
          }, {
            n: 'stopBounce',
            ti: 'Float',
            an: {
              lp: 'stopBounce'
            },
            t: 'a'
          }, {
            n: 'stopErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stopErrorCorrection'
            },
            t: 'a'
          }]
      }, {
        ln: 'IndexedTriangleSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'index',
            an: {
              lp: 'index'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionInterpolator2D',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'Contour2D',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'nurbsCurve2DOrContourPolyline2DOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'NurbsCurve2D'
                },
                ti: '.NurbsCurve2D'
              }, {
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProtoInstance',
        tn: null,
        bti: '.X3DPrototypeInstance',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }]
      }, {
        ln: 'Shape',
        tn: null,
        bti: '.X3DShapeNode'
      }, {
        ln: 'ImageTexture',
        tn: null,
        bti: '.X3DTexture2DNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundedPhysicsModel',
        tn: null,
        bti: '.X3DParticlePhysicsModelNode',
        ps: [{
            n: 'box',
            rq: true,
            en: {
              lp: 'Box'
            },
            ti: '.Box'
          }, {
            n: 'cone',
            rq: true,
            en: {
              lp: 'Cone'
            },
            ti: '.Cone'
          }, {
            n: 'cylinder',
            rq: true,
            en: {
              lp: 'Cylinder'
            },
            ti: '.Cylinder'
          }, {
            n: 'indexedFaceSet',
            rq: true,
            en: {
              lp: 'IndexedFaceSet'
            },
            ti: '.IndexedFaceSet'
          }, {
            n: 'indexedLineSet',
            rq: true,
            en: {
              lp: 'IndexedLineSet'
            },
            ti: '.IndexedLineSet'
          }, {
            n: 'indexedTriangleFanSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleFanSet'
            },
            ti: '.IndexedTriangleFanSet'
          }, {
            n: 'indexedTriangleSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleSet'
            },
            ti: '.IndexedTriangleSet'
          }, {
            n: 'indexedTriangleStripSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleStripSet'
            },
            ti: '.IndexedTriangleStripSet'
          }, {
            n: 'lineSet',
            rq: true,
            en: {
              lp: 'LineSet'
            },
            ti: '.LineSet'
          }, {
            n: 'pointSet',
            rq: true,
            en: {
              lp: 'PointSet'
            },
            ti: '.PointSet'
          }, {
            n: 'sphere',
            rq: true,
            en: {
              lp: 'Sphere'
            },
            ti: '.Sphere'
          }, {
            n: 'triangleFanSet',
            rq: true,
            en: {
              lp: 'TriangleFanSet'
            },
            ti: '.TriangleFanSet'
          }, {
            n: 'triangleSet',
            rq: true,
            en: {
              lp: 'TriangleSet'
            },
            ti: '.TriangleSet'
          }, {
            n: 'triangleStripSet',
            rq: true,
            en: {
              lp: 'TriangleStripSet'
            },
            ti: '.TriangleStripSet'
          }, {
            n: 'elevationGrid',
            rq: true,
            en: {
              lp: 'ElevationGrid'
            },
            ti: '.ElevationGrid'
          }, {
            n: 'polyline2D',
            rq: true,
            en: {
              lp: 'Polyline2D'
            },
            ti: '.Polyline2D'
          }, {
            n: 'polypoint2D',
            rq: true,
            en: {
              lp: 'Polypoint2D'
            },
            ti: '.Polypoint2D'
          }, {
            n: 'rectangle2D',
            rq: true,
            en: {
              lp: 'Rectangle2D'
            },
            ti: '.Rectangle2D'
          }, {
            n: 'triangleSet2D',
            rq: true,
            en: {
              lp: 'TriangleSet2D'
            },
            ti: '.TriangleSet2D'
          }, {
            n: 'extrusion',
            rq: true,
            en: {
              lp: 'Extrusion'
            },
            ti: '.Extrusion'
          }, {
            n: 'text',
            rq: true,
            en: {
              lp: 'Text'
            },
            ti: '.Text'
          }, {
            n: 'arc2D',
            rq: true,
            en: {
              lp: 'Arc2D'
            },
            ti: '.Arc2D'
          }, {
            n: 'arcClose2D',
            rq: true,
            en: {
              lp: 'ArcClose2D'
            },
            ti: '.ArcClose2D'
          }, {
            n: 'circle2D',
            rq: true,
            en: {
              lp: 'Circle2D'
            },
            ti: '.Circle2D'
          }, {
            n: 'disk2D',
            rq: true,
            en: {
              lp: 'Disk2D'
            },
            ti: '.Disk2D'
          }, {
            n: 'quadSet',
            rq: true,
            en: {
              lp: 'QuadSet'
            },
            ti: '.QuadSet'
          }, {
            n: 'indexedQuadSet',
            rq: true,
            en: {
              lp: 'IndexedQuadSet'
            },
            ti: '.IndexedQuadSet'
          }, {
            n: 'geoElevationGrid',
            rq: true,
            en: {
              lp: 'GeoElevationGrid'
            },
            ti: '.GeoElevationGrid'
          }, {
            n: 'nurbsCurve',
            rq: true,
            en: {
              lp: 'NurbsCurve'
            },
            ti: '.NurbsCurve'
          }, {
            n: 'nurbsPatchSurface',
            rq: true,
            en: {
              lp: 'NurbsPatchSurface'
            },
            ti: '.NurbsPatchSurface'
          }, {
            n: 'nurbsSweptSurface',
            rq: true,
            en: {
              lp: 'NurbsSweptSurface'
            },
            ti: '.NurbsSweptSurface'
          }, {
            n: 'nurbsSwungSurface',
            rq: true,
            en: {
              lp: 'NurbsSwungSurface'
            },
            ti: '.NurbsSwungSurface'
          }, {
            n: 'nurbsTrimmedSurface',
            rq: true,
            en: {
              lp: 'NurbsTrimmedSurface'
            },
            ti: '.NurbsTrimmedSurface'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'NurbsTextureCoordinate',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'controlPoint',
            an: {
              lp: 'controlPoint'
            },
            t: 'a'
          }, {
            n: 'uDimension',
            ti: 'Integer',
            an: {
              lp: 'uDimension'
            },
            t: 'a'
          }, {
            n: 'vDimension',
            ti: 'Integer',
            an: {
              lp: 'vDimension'
            },
            t: 'a'
          }, {
            n: 'uKnot',
            an: {
              lp: 'uKnot'
            },
            t: 'a'
          }, {
            n: 'vKnot',
            an: {
              lp: 'vKnot'
            },
            t: 'a'
          }, {
            n: 'uOrder',
            ti: 'Integer',
            an: {
              lp: 'uOrder'
            },
            t: 'a'
          }, {
            n: 'vOrder',
            ti: 'Integer',
            an: {
              lp: 'vOrder'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExplosionEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DGeometricPropertyNode',
        bti: '.X3DNode'
      }, {
        ln: 'IndexedTriangleFanSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'index',
            an: {
              lp: 'index'
            },
            t: 'a'
          }]
      }, {
        ln: 'TwoSidedMaterial',
        tn: null,
        bti: '.X3DMaterialNode',
        ps: [{
            n: 'ambientIntensity',
            ti: 'Float',
            an: {
              lp: 'ambientIntensity'
            },
            t: 'a'
          }, {
            n: 'backAmbientIntensity',
            ti: 'Float',
            an: {
              lp: 'backAmbientIntensity'
            },
            t: 'a'
          }, {
            n: 'diffuseColor',
            an: {
              lp: 'diffuseColor'
            },
            t: 'a'
          }, {
            n: 'backDiffuseColor',
            an: {
              lp: 'backDiffuseColor'
            },
            t: 'a'
          }, {
            n: 'emissiveColor',
            an: {
              lp: 'emissiveColor'
            },
            t: 'a'
          }, {
            n: 'backEmissiveColor',
            an: {
              lp: 'backEmissiveColor'
            },
            t: 'a'
          }, {
            n: 'shininess',
            ti: 'Float',
            an: {
              lp: 'shininess'
            },
            t: 'a'
          }, {
            n: 'backShininess',
            ti: 'Float',
            an: {
              lp: 'backShininess'
            },
            t: 'a'
          }, {
            n: 'specularColor',
            an: {
              lp: 'specularColor'
            },
            t: 'a'
          }, {
            n: 'backSpecularColor',
            an: {
              lp: 'backSpecularColor'
            },
            t: 'a'
          }, {
            n: 'transparency',
            ti: 'Float',
            an: {
              lp: 'transparency'
            },
            t: 'a'
          }, {
            n: 'backTransparency',
            ti: 'Float',
            an: {
              lp: 'backTransparency'
            },
            t: 'a'
          }, {
            n: 'separateBackColor',
            ti: 'Boolean',
            an: {
              lp: 'separateBackColor'
            },
            t: 'a'
          }]
      }, {
        ln: 'PrimitivePickSensor',
        tn: null,
        bti: '.X3DPickSensorNode',
        ps: [{
            n: 'box',
            rq: true,
            en: {
              lp: 'Box'
            },
            ti: '.Box'
          }, {
            n: 'cone',
            rq: true,
            en: {
              lp: 'Cone'
            },
            ti: '.Cone'
          }, {
            n: 'cylinder',
            rq: true,
            en: {
              lp: 'Cylinder'
            },
            ti: '.Cylinder'
          }, {
            n: 'sphere',
            rq: true,
            en: {
              lp: 'Sphere'
            },
            ti: '.Sphere'
          }, {
            n: 'anchorOrBillboardOrCollision',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'LayoutGroup'
                },
                ti: '.LayoutGroup'
              }, {
                en: {
                  lp: 'ScreenGroup'
                },
                ti: '.ScreenGroup'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'RigidBodyCollection',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'rest',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'BallJoint'
                },
                ti: '.BallJoint'
              }, {
                en: {
                  lp: 'MotorJoint'
                },
                ti: '.MotorJoint'
              }, {
                en: {
                  lp: 'SingleAxisHingeJoint'
                },
                ti: '.SingleAxisHingeJoint'
              }, {
                en: {
                  lp: 'DoubleAxisHingeJoint'
                },
                ti: '.DoubleAxisHingeJoint'
              }, {
                en: {
                  lp: 'CollisionCollection'
                },
                ti: '.CollisionCollection'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'UniversalJoint'
                },
                ti: '.UniversalJoint'
              }, {
                en: {
                  lp: 'SliderJoint'
                },
                ti: '.SliderJoint'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }],
            t: 'ers'
          }, {
            n: 'autoDisable',
            ti: 'Boolean',
            an: {
              lp: 'autoDisable'
            },
            t: 'a'
          }, {
            n: 'constantForceMix',
            ti: 'Float',
            an: {
              lp: 'constantForceMix'
            },
            t: 'a'
          }, {
            n: 'contactSurfaceThickness',
            ti: 'Float',
            an: {
              lp: 'contactSurfaceThickness'
            },
            t: 'a'
          }, {
            n: 'disableAngularSpeed',
            ti: 'Float',
            an: {
              lp: 'disableAngularSpeed'
            },
            t: 'a'
          }, {
            n: 'disableLinearSpeed',
            ti: 'Float',
            an: {
              lp: 'disableLinearSpeed'
            },
            t: 'a'
          }, {
            n: 'disableTime',
            ti: 'Double',
            an: {
              lp: 'disableTime'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'errorCorrection',
            ti: 'Float',
            an: {
              lp: 'errorCorrection'
            },
            t: 'a'
          }, {
            n: 'gravity',
            an: {
              lp: 'gravity'
            },
            t: 'a'
          }, {
            n: 'iterations',
            ti: 'Integer',
            an: {
              lp: 'iterations'
            },
            t: 'a'
          }, {
            n: 'maxCorrectionSpeed',
            ti: 'Float',
            an: {
              lp: 'maxCorrectionSpeed'
            },
            t: 'a'
          }, {
            n: 'preferAccuracy',
            ti: 'Boolean',
            an: {
              lp: 'preferAccuracy'
            },
            t: 'a'
          }]
      }, {
        ln: 'SplinePositionInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'closed',
            ti: 'Boolean',
            an: {
              lp: 'closed'
            },
            t: 'a'
          }, {
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }, {
            n: 'keyVelocity',
            an: {
              lp: 'keyVelocity'
            },
            t: 'a'
          }, {
            n: 'normalizeVelocity',
            ti: 'Boolean',
            an: {
              lp: 'normalizeVelocity'
            },
            t: 'a'
          }]
      }, {
        ln: 'PixelTexture',
        tn: null,
        bti: '.X3DTexture2DNode',
        ps: [{
            n: 'image',
            an: {
              lp: 'image'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataFloat',
        tn: null,
        bti: '.X3DMetadataObject',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DProgrammableShaderObject',
        ps: [{
            n: 'field',
            mno: 0,
            col: true,
            en: {
              lp: 'field'
            },
            ti: '.Field'
          }, {
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'metadataBoolean',
            rq: true,
            en: {
              lp: 'MetadataBoolean'
            },
            ti: '.MetadataBoolean'
          }, {
            n: 'metadataDouble',
            rq: true,
            en: {
              lp: 'MetadataDouble'
            },
            ti: '.MetadataDouble'
          }, {
            n: 'metadataFloat',
            rq: true,
            en: {
              lp: 'MetadataFloat'
            },
            ti: '.MetadataFloat'
          }, {
            n: 'metadataInteger',
            rq: true,
            en: {
              lp: 'MetadataInteger'
            },
            ti: '.MetadataInteger'
          }, {
            n: 'metadataSet',
            rq: true,
            en: {
              lp: 'MetadataSet'
            },
            ti: '.MetadataSet'
          }, {
            n: 'metadataString',
            rq: true,
            en: {
              lp: 'MetadataString'
            },
            ti: '.MetadataString'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }]
      }, {
        ln: 'SplineScalarInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'closed',
            ti: 'Boolean',
            an: {
              lp: 'closed'
            },
            t: 'a'
          }, {
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }, {
            n: 'keyVelocity',
            an: {
              lp: 'keyVelocity'
            },
            t: 'a'
          }, {
            n: 'normalizeVelocity',
            ti: 'Boolean',
            an: {
              lp: 'normalizeVelocity'
            },
            t: 'a'
          }]
      }, {
        ln: 'KeySensor',
        tn: null,
        bti: '.X3DKeyDeviceSensorNode'
      }, {
        ln: 'EspduTransform',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'marking',
            an: {
              lp: 'marking'
            },
            t: 'a'
          }, {
            n: 'siteID',
            ti: 'Integer',
            an: {
              lp: 'siteID'
            },
            t: 'a'
          }, {
            n: 'applicationID',
            ti: 'Integer',
            an: {
              lp: 'applicationID'
            },
            t: 'a'
          }, {
            n: 'entityID',
            ti: 'Integer',
            an: {
              lp: 'entityID'
            },
            t: 'a'
          }, {
            n: 'forceID',
            ti: 'Integer',
            an: {
              lp: 'forceID'
            },
            t: 'a'
          }, {
            n: 'entityKind',
            ti: 'Integer',
            an: {
              lp: 'entityKind'
            },
            t: 'a'
          }, {
            n: 'entityDomain',
            ti: 'Integer',
            an: {
              lp: 'entityDomain'
            },
            t: 'a'
          }, {
            n: 'entityCountry',
            ti: 'Integer',
            an: {
              lp: 'entityCountry'
            },
            t: 'a'
          }, {
            n: 'entityCategory',
            ti: 'Integer',
            an: {
              lp: 'entityCategory'
            },
            t: 'a'
          }, {
            n: 'entitySubcategory',
            ti: 'Integer',
            an: {
              lp: 'entitySubcategory'
            },
            t: 'a'
          }, {
            n: 'entitySpecific',
            ti: 'Integer',
            an: {
              lp: 'entitySpecific'
            },
            t: 'a'
          }, {
            n: 'entityExtra',
            ti: 'Integer',
            an: {
              lp: 'entityExtra'
            },
            t: 'a'
          }, {
            n: 'readInterval',
            ti: 'Double',
            an: {
              lp: 'readInterval'
            },
            t: 'a'
          }, {
            n: 'writeInterval',
            ti: 'Double',
            an: {
              lp: 'writeInterval'
            },
            t: 'a'
          }, {
            n: 'networkMode',
            an: {
              lp: 'networkMode'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }, {
            n: 'port',
            ti: 'Integer',
            an: {
              lp: 'port'
            },
            t: 'a'
          }, {
            n: 'multicastRelayHost',
            an: {
              lp: 'multicastRelayHost'
            },
            t: 'a'
          }, {
            n: 'multicastRelayPort',
            ti: 'Integer',
            an: {
              lp: 'multicastRelayPort'
            },
            t: 'a'
          }, {
            n: 'rtpHeaderExpected',
            ti: 'Boolean',
            an: {
              lp: 'rtpHeaderExpected'
            },
            t: 'a'
          }, {
            n: 'deadReckoning',
            ti: 'Integer',
            an: {
              lp: 'deadReckoning'
            },
            t: 'a'
          }, {
            n: 'linearVelocity',
            an: {
              lp: 'linearVelocity'
            },
            t: 'a'
          }, {
            n: 'linearAcceleration',
            an: {
              lp: 'linearAcceleration'
            },
            t: 'a'
          }, {
            n: 'fired1',
            ti: 'Boolean',
            an: {
              lp: 'fired1'
            },
            t: 'a'
          }, {
            n: 'fired2',
            ti: 'Boolean',
            an: {
              lp: 'fired2'
            },
            t: 'a'
          }, {
            n: 'collisionType',
            ti: 'Integer',
            an: {
              lp: 'collisionType'
            },
            t: 'a'
          }, {
            n: 'detonationLocation',
            an: {
              lp: 'detonationLocation'
            },
            t: 'a'
          }, {
            n: 'detonationRelativeLocation',
            an: {
              lp: 'detonationRelativeLocation'
            },
            t: 'a'
          }, {
            n: 'detonationResult',
            ti: 'Integer',
            an: {
              lp: 'detonationResult'
            },
            t: 'a'
          }, {
            n: 'eventApplicationID',
            ti: 'Integer',
            an: {
              lp: 'eventApplicationID'
            },
            t: 'a'
          }, {
            n: 'eventEntityID',
            ti: 'Integer',
            an: {
              lp: 'eventEntityID'
            },
            t: 'a'
          }, {
            n: 'eventNumber',
            ti: 'Integer',
            an: {
              lp: 'eventNumber'
            },
            t: 'a'
          }, {
            n: 'eventSiteID',
            ti: 'Integer',
            an: {
              lp: 'eventSiteID'
            },
            t: 'a'
          }, {
            n: 'munitionStartPoint',
            an: {
              lp: 'munitionStartPoint'
            },
            t: 'a'
          }, {
            n: 'munitionEndPoint',
            an: {
              lp: 'munitionEndPoint'
            },
            t: 'a'
          }, {
            n: 'munitionSiteID',
            ti: 'Integer',
            an: {
              lp: 'munitionSiteID'
            },
            t: 'a'
          }, {
            n: 'munitionApplicationID',
            ti: 'Integer',
            an: {
              lp: 'munitionApplicationID'
            },
            t: 'a'
          }, {
            n: 'munitionEntityID',
            ti: 'Integer',
            an: {
              lp: 'munitionEntityID'
            },
            t: 'a'
          }, {
            n: 'fireMissionIndex',
            ti: 'Integer',
            an: {
              lp: 'fireMissionIndex'
            },
            t: 'a'
          }, {
            n: 'warhead',
            ti: 'Integer',
            an: {
              lp: 'warhead'
            },
            t: 'a'
          }, {
            n: 'fuse',
            ti: 'Integer',
            an: {
              lp: 'fuse'
            },
            t: 'a'
          }, {
            n: 'munitionQuantity',
            ti: 'Integer',
            an: {
              lp: 'munitionQuantity'
            },
            t: 'a'
          }, {
            n: 'firingRate',
            ti: 'Integer',
            an: {
              lp: 'firingRate'
            },
            t: 'a'
          }, {
            n: 'firingRange',
            ti: 'Float',
            an: {
              lp: 'firingRange'
            },
            t: 'a'
          }, {
            n: 'articulationParameterCount',
            ti: 'Integer',
            an: {
              lp: 'articulationParameterCount'
            },
            t: 'a'
          }, {
            n: 'articulationParameterDesignatorArray',
            an: {
              lp: 'articulationParameterDesignatorArray'
            },
            t: 'a'
          }, {
            n: 'articulationParameterChangeIndicatorArray',
            an: {
              lp: 'articulationParameterChangeIndicatorArray'
            },
            t: 'a'
          }, {
            n: 'articulationParameterIdPartAttachedToArray',
            an: {
              lp: 'articulationParameterIdPartAttachedToArray'
            },
            t: 'a'
          }, {
            n: 'articulationParameterTypeArray',
            an: {
              lp: 'articulationParameterTypeArray'
            },
            t: 'a'
          }, {
            n: 'articulationParameterArray',
            an: {
              lp: 'articulationParameterArray'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }]
      }, {
        ln: 'IndexedLineSet',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }],
            t: 'ers'
          }, {
            n: 'colorPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'colorPerVertex'
            },
            t: 'a'
          }, {
            n: 'colorIndex',
            an: {
              lp: 'colorIndex'
            },
            t: 'a'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordinateDamper',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'ColorChaser',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'PickableGroup',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'nurbsPatchSurfaceAndNurbsSweptSurfaceAndNurbsSwungSurface',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'objectType',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'objectType'
            },
            t: 'a'
          }, {
            n: 'pickable',
            ti: 'Boolean',
            an: {
              lp: 'pickable'
            },
            t: 'a'
          }]
      }, {
        ln: 'RigidBody',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'rest',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'Sphere'
                },
                ti: '.Sphere'
              }, {
                en: {
                  lp: 'Cone'
                },
                ti: '.Cone'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'Box'
                },
                ti: '.Box'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }],
            t: 'ers'
          }, {
            n: 'angularDampingFactor',
            ti: 'Float',
            an: {
              lp: 'angularDampingFactor'
            },
            t: 'a'
          }, {
            n: 'angularVelocity',
            an: {
              lp: 'angularVelocity'
            },
            t: 'a'
          }, {
            n: 'autoDamp',
            ti: 'Boolean',
            an: {
              lp: 'autoDamp'
            },
            t: 'a'
          }, {
            n: 'autoDisable',
            ti: 'Boolean',
            an: {
              lp: 'autoDisable'
            },
            t: 'a'
          }, {
            n: 'centerOfMass',
            an: {
              lp: 'centerOfMass'
            },
            t: 'a'
          }, {
            n: 'disableAngularSpeed',
            ti: 'Float',
            an: {
              lp: 'disableAngularSpeed'
            },
            t: 'a'
          }, {
            n: 'disableLinearSpeed',
            ti: 'Float',
            an: {
              lp: 'disableLinearSpeed'
            },
            t: 'a'
          }, {
            n: 'disableTime',
            ti: 'Double',
            an: {
              lp: 'disableTime'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'finiteRotationAxis',
            an: {
              lp: 'finiteRotationAxis'
            },
            t: 'a'
          }, {
            n: 'fixed',
            ti: 'Boolean',
            an: {
              lp: 'fixed'
            },
            t: 'a'
          }, {
            n: 'forces',
            an: {
              lp: 'forces'
            },
            t: 'a'
          }, {
            n: 'inertia',
            an: {
              lp: 'inertia'
            },
            t: 'a'
          }, {
            n: 'linearDampingFactor',
            ti: 'Float',
            an: {
              lp: 'linearDampingFactor'
            },
            t: 'a'
          }, {
            n: 'linearVelocity',
            an: {
              lp: 'linearVelocity'
            },
            t: 'a'
          }, {
            n: 'mass',
            ti: 'Float',
            an: {
              lp: 'mass'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'torques',
            an: {
              lp: 'torques'
            },
            t: 'a'
          }, {
            n: 'useFiniteRotation',
            ti: 'Boolean',
            an: {
              lp: 'useFiniteRotation'
            },
            t: 'a'
          }, {
            n: 'useGlobalGravity',
            ti: 'Boolean',
            an: {
              lp: 'useGlobalGravity'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoLOD',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'background',
            rq: true,
            en: {
              lp: 'Background'
            },
            ti: '.Background'
          }, {
            n: 'colorInterpolator',
            rq: true,
            en: {
              lp: 'ColorInterpolator'
            },
            ti: '.ColorInterpolator'
          }, {
            n: 'coordinateInterpolator',
            rq: true,
            en: {
              lp: 'CoordinateInterpolator'
            },
            ti: '.CoordinateInterpolator'
          }, {
            n: 'directionalLight',
            rq: true,
            en: {
              lp: 'DirectionalLight'
            },
            ti: '.DirectionalLight'
          }, {
            n: 'group',
            rq: true,
            en: {
              lp: 'Group'
            },
            ti: '.Group'
          }, {
            n: 'navigationInfo',
            rq: true,
            en: {
              lp: 'NavigationInfo'
            },
            ti: '.NavigationInfo'
          }, {
            n: 'normalInterpolator',
            rq: true,
            en: {
              lp: 'NormalInterpolator'
            },
            ti: '.NormalInterpolator'
          }, {
            n: 'orientationInterpolator',
            rq: true,
            en: {
              lp: 'OrientationInterpolator'
            },
            ti: '.OrientationInterpolator'
          }, {
            n: 'positionInterpolator',
            rq: true,
            en: {
              lp: 'PositionInterpolator'
            },
            ti: '.PositionInterpolator'
          }, {
            n: 'scalarInterpolator',
            rq: true,
            en: {
              lp: 'ScalarInterpolator'
            },
            ti: '.ScalarInterpolator'
          }, {
            n: 'shape',
            rq: true,
            en: {
              lp: 'Shape'
            },
            ti: '.Shape'
          }, {
            n: 'timeSensor',
            rq: true,
            en: {
              lp: 'TimeSensor'
            },
            ti: '.TimeSensor'
          }, {
            n: 'transform',
            rq: true,
            en: {
              lp: 'Transform'
            },
            ti: '.Transform'
          }, {
            n: 'viewpoint',
            rq: true,
            en: {
              lp: 'Viewpoint'
            },
            ti: '.Viewpoint'
          }, {
            n: 'worldInfo',
            rq: true,
            en: {
              lp: 'WorldInfo'
            },
            ti: '.WorldInfo'
          }, {
            n: 'anchor',
            rq: true,
            en: {
              lp: 'Anchor'
            },
            ti: '.Anchor'
          }, {
            n: 'booleanFilter',
            rq: true,
            en: {
              lp: 'BooleanFilter'
            },
            ti: '.BooleanFilter'
          }, {
            n: 'booleanSequencer',
            rq: true,
            en: {
              lp: 'BooleanSequencer'
            },
            ti: '.BooleanSequencer'
          }, {
            n: 'booleanToggle',
            rq: true,
            en: {
              lp: 'BooleanToggle'
            },
            ti: '.BooleanToggle'
          }, {
            n: 'booleanTrigger',
            rq: true,
            en: {
              lp: 'BooleanTrigger'
            },
            ti: '.BooleanTrigger'
          }, {
            n: 'cylinderSensor',
            rq: true,
            en: {
              lp: 'CylinderSensor'
            },
            ti: '.CylinderSensor'
          }, {
            n: 'inline',
            rq: true,
            en: {
              lp: 'Inline'
            },
            ti: '.Inline'
          }, {
            n: 'integerSequencer',
            rq: true,
            en: {
              lp: 'IntegerSequencer'
            },
            ti: '.IntegerSequencer'
          }, {
            n: 'integerTrigger',
            rq: true,
            en: {
              lp: 'IntegerTrigger'
            },
            ti: '.IntegerTrigger'
          }, {
            n: 'keySensor',
            rq: true,
            en: {
              lp: 'KeySensor'
            },
            ti: '.KeySensor'
          }, {
            n: 'planeSensor',
            rq: true,
            en: {
              lp: 'PlaneSensor'
            },
            ti: '.PlaneSensor'
          }, {
            n: 'pointLight',
            rq: true,
            en: {
              lp: 'PointLight'
            },
            ti: '.PointLight'
          }, {
            n: 'proximitySensor',
            rq: true,
            en: {
              lp: 'ProximitySensor'
            },
            ti: '.ProximitySensor'
          }, {
            n: 'sphereSensor',
            rq: true,
            en: {
              lp: 'SphereSensor'
            },
            ti: '.SphereSensor'
          }, {
            n: 'spotLight',
            rq: true,
            en: {
              lp: 'SpotLight'
            },
            ti: '.SpotLight'
          }, {
            n: 'stringSensor',
            rq: true,
            en: {
              lp: 'StringSensor'
            },
            ti: '.StringSensor'
          }, {
            n: '_switch',
            rq: true,
            en: {
              lp: 'Switch'
            },
            ti: '.Switch'
          }, {
            n: 'timeTrigger',
            rq: true,
            en: {
              lp: 'TimeTrigger'
            },
            ti: '.TimeTrigger'
          }, {
            n: 'touchSensor',
            rq: true,
            en: {
              lp: 'TouchSensor'
            },
            ti: '.TouchSensor'
          }, {
            n: 'audioClip',
            rq: true,
            en: {
              lp: 'AudioClip'
            },
            ti: '.AudioClip'
          }, {
            n: 'billboard',
            rq: true,
            en: {
              lp: 'Billboard'
            },
            ti: '.Billboard'
          }, {
            n: 'collision',
            rq: true,
            en: {
              lp: 'Collision'
            },
            ti: '.Collision'
          }, {
            n: 'fog',
            rq: true,
            en: {
              lp: 'Fog'
            },
            ti: '.Fog'
          }, {
            n: 'loadSensor',
            rq: true,
            en: {
              lp: 'LoadSensor'
            },
            ti: '.LoadSensor'
          }, {
            n: 'localFog',
            rq: true,
            en: {
              lp: 'LocalFog'
            },
            ti: '.LocalFog'
          }, {
            n: 'lod',
            rq: true,
            en: {
              lp: 'LOD'
            },
            ti: '.LOD'
          }, {
            n: 'script',
            rq: true,
            en: {
              lp: 'Script'
            },
            ti: '.Script'
          }, {
            n: 'sound',
            rq: true,
            en: {
              lp: 'Sound'
            },
            ti: '.Sound'
          }, {
            n: 'visibilitySensor',
            rq: true,
            en: {
              lp: 'VisibilitySensor'
            },
            ti: '.VisibilitySensor'
          }, {
            n: 'coordinateInterpolator2D',
            rq: true,
            en: {
              lp: 'CoordinateInterpolator2D'
            },
            ti: '.CoordinateInterpolator2D'
          }, {
            n: 'positionInterpolator2D',
            rq: true,
            en: {
              lp: 'PositionInterpolator2D'
            },
            ti: '.PositionInterpolator2D'
          }, {
            n: 'clipPlane',
            rq: true,
            en: {
              lp: 'ClipPlane'
            },
            ti: '.ClipPlane'
          }, {
            n: 'easeInEaseOut',
            rq: true,
            en: {
              lp: 'EaseInEaseOut'
            },
            ti: '.EaseInEaseOut'
          }, {
            n: 'linePickSensor',
            rq: true,
            en: {
              lp: 'LinePickSensor'
            },
            ti: '.LinePickSensor'
          }, {
            n: 'pickableGroup',
            rq: true,
            en: {
              lp: 'PickableGroup'
            },
            ti: '.PickableGroup'
          }, {
            n: 'pointPickSensor',
            rq: true,
            en: {
              lp: 'PointPickSensor'
            },
            ti: '.PointPickSensor'
          }, {
            n: 'primitivePickSensor',
            rq: true,
            en: {
              lp: 'PrimitivePickSensor'
            },
            ti: '.PrimitivePickSensor'
          }, {
            n: 'volumePickSensor',
            rq: true,
            en: {
              lp: 'VolumePickSensor'
            },
            ti: '.VolumePickSensor'
          }, {
            n: 'splinePositionInterpolator',
            rq: true,
            en: {
              lp: 'SplinePositionInterpolator'
            },
            ti: '.SplinePositionInterpolator'
          }, {
            n: 'splinePositionInterpolator2D',
            rq: true,
            en: {
              lp: 'SplinePositionInterpolator2D'
            },
            ti: '.SplinePositionInterpolator2D'
          }, {
            n: 'splineScalarInterpolator',
            rq: true,
            en: {
              lp: 'SplineScalarInterpolator'
            },
            ti: '.SplineScalarInterpolator'
          }, {
            n: 'squadOrientationInterpolator',
            rq: true,
            en: {
              lp: 'SquadOrientationInterpolator'
            },
            ti: '.SquadOrientationInterpolator'
          }, {
            n: 'staticGroup',
            rq: true,
            en: {
              lp: 'StaticGroup'
            },
            ti: '.StaticGroup'
          }, {
            n: 'cadAssembly',
            rq: true,
            en: {
              lp: 'CADAssembly'
            },
            ti: '.CADAssembly'
          }, {
            n: 'cadLayer',
            rq: true,
            en: {
              lp: 'CADLayer'
            },
            ti: '.CADLayer'
          }, {
            n: 'cadPart',
            rq: true,
            en: {
              lp: 'CADPart'
            },
            ti: '.CADPart'
          }, {
            n: 'orthoViewpoint',
            rq: true,
            en: {
              lp: 'OrthoViewpoint'
            },
            ti: '.OrthoViewpoint'
          }, {
            n: 'viewpointGroup',
            rq: true,
            en: {
              lp: 'ViewpointGroup'
            },
            ti: '.ViewpointGroup'
          }, {
            n: 'colorChaser',
            rq: true,
            en: {
              lp: 'ColorChaser'
            },
            ti: '.ColorChaser'
          }, {
            n: 'colorDamper',
            rq: true,
            en: {
              lp: 'ColorDamper'
            },
            ti: '.ColorDamper'
          }, {
            n: 'coordinateChaser',
            rq: true,
            en: {
              lp: 'CoordinateChaser'
            },
            ti: '.CoordinateChaser'
          }, {
            n: 'coordinateDamper',
            rq: true,
            en: {
              lp: 'CoordinateDamper'
            },
            ti: '.CoordinateDamper'
          }, {
            n: 'orientationChaser',
            rq: true,
            en: {
              lp: 'OrientationChaser'
            },
            ti: '.OrientationChaser'
          }, {
            n: 'orientationDamper',
            rq: true,
            en: {
              lp: 'OrientationDamper'
            },
            ti: '.OrientationDamper'
          }, {
            n: 'positionChaser',
            rq: true,
            en: {
              lp: 'PositionChaser'
            },
            ti: '.PositionChaser'
          }, {
            n: 'positionChaser2D',
            rq: true,
            en: {
              lp: 'PositionChaser2D'
            },
            ti: '.PositionChaser2D'
          }, {
            n: 'positionDamper',
            rq: true,
            en: {
              lp: 'PositionDamper'
            },
            ti: '.PositionDamper'
          }, {
            n: 'positionDamper2D',
            rq: true,
            en: {
              lp: 'PositionDamper2D'
            },
            ti: '.PositionDamper2D'
          }, {
            n: 'scalarChaser',
            rq: true,
            en: {
              lp: 'ScalarChaser'
            },
            ti: '.ScalarChaser'
          }, {
            n: 'scalarDamper',
            rq: true,
            en: {
              lp: 'ScalarDamper'
            },
            ti: '.ScalarDamper'
          }, {
            n: 'texCoordChaser2D',
            rq: true,
            en: {
              lp: 'TexCoordChaser2D'
            },
            ti: '.TexCoordChaser2D'
          }, {
            n: 'texCoordDamper2D',
            rq: true,
            en: {
              lp: 'TexCoordDamper2D'
            },
            ti: '.TexCoordDamper2D'
          }, {
            n: 'textureBackground',
            rq: true,
            en: {
              lp: 'TextureBackground'
            },
            ti: '.TextureBackground'
          }, {
            n: 'collidableShape',
            rq: true,
            en: {
              lp: 'CollidableShape'
            },
            ti: '.CollidableShape'
          }, {
            n: 'collisionSensor',
            rq: true,
            en: {
              lp: 'CollisionSensor'
            },
            ti: '.CollisionSensor'
          }, {
            n: 'rigidBodyCollection',
            rq: true,
            en: {
              lp: 'RigidBodyCollection'
            },
            ti: '.RigidBodyCollection'
          }, {
            n: 'layerSet',
            rq: true,
            en: {
              lp: 'LayerSet'
            },
            ti: '.LayerSet'
          }, {
            n: 'particleSystem',
            rq: true,
            en: {
              lp: 'ParticleSystem'
            },
            ti: '.ParticleSystem'
          }, {
            n: 'transformSensor',
            rq: true,
            en: {
              lp: 'TransformSensor'
            },
            ti: '.TransformSensor'
          }, {
            n: 'isoSurfaceVolumeData',
            rq: true,
            en: {
              lp: 'IsoSurfaceVolumeData'
            },
            ti: '.IsoSurfaceVolumeData'
          }, {
            n: 'segmentedVolumeData',
            rq: true,
            en: {
              lp: 'SegmentedVolumeData'
            },
            ti: '.SegmentedVolumeData'
          }, {
            n: 'volumeData',
            rq: true,
            en: {
              lp: 'VolumeData'
            },
            ti: '.VolumeData'
          }, {
            n: 'espduTransform',
            rq: true,
            en: {
              lp: 'EspduTransform'
            },
            ti: '.EspduTransform'
          }, {
            n: 'receiverPdu',
            rq: true,
            en: {
              lp: 'ReceiverPdu'
            },
            ti: '.ReceiverPdu'
          }, {
            n: 'signalPdu',
            rq: true,
            en: {
              lp: 'SignalPdu'
            },
            ti: '.SignalPdu'
          }, {
            n: 'transmitterPdu',
            rq: true,
            en: {
              lp: 'TransmitterPdu'
            },
            ti: '.TransmitterPdu'
          }, {
            n: 'disEntityManager',
            rq: true,
            en: {
              lp: 'DISEntityManager'
            },
            ti: '.DISEntityManager'
          }, {
            n: 'geoLocation',
            rq: true,
            en: {
              lp: 'GeoLocation'
            },
            ti: '.GeoLocation'
          }, {
            n: 'geoLOD',
            rq: true,
            en: {
              lp: 'GeoLOD'
            },
            ti: '.GeoLOD'
          }, {
            n: 'geoMetadata',
            rq: true,
            en: {
              lp: 'GeoMetadata'
            },
            ti: '.GeoMetadata'
          }, {
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoPositionInterpolator',
            rq: true,
            en: {
              lp: 'GeoPositionInterpolator'
            },
            ti: '.GeoPositionInterpolator'
          }, {
            n: 'geoProximitySensor',
            rq: true,
            en: {
              lp: 'GeoProximitySensor'
            },
            ti: '.GeoProximitySensor'
          }, {
            n: 'geoTouchSensor',
            rq: true,
            en: {
              lp: 'GeoTouchSensor'
            },
            ti: '.GeoTouchSensor'
          }, {
            n: 'geoViewpoint',
            rq: true,
            en: {
              lp: 'GeoViewpoint'
            },
            ti: '.GeoViewpoint'
          }, {
            n: 'geoTransform',
            rq: true,
            en: {
              lp: 'GeoTransform'
            },
            ti: '.GeoTransform'
          }, {
            n: 'hAnimHumanoid',
            rq: true,
            en: {
              lp: 'HAnimHumanoid'
            },
            ti: '.HAnimHumanoid'
          }, {
            n: 'hAnimJoint',
            rq: true,
            en: {
              lp: 'HAnimJoint'
            },
            ti: '.HAnimJoint'
          }, {
            n: 'hAnimSegment',
            rq: true,
            en: {
              lp: 'HAnimSegment'
            },
            ti: '.HAnimSegment'
          }, {
            n: 'hAnimSite',
            rq: true,
            en: {
              lp: 'HAnimSite'
            },
            ti: '.HAnimSite'
          }, {
            n: 'nurbsOrientationInterpolator',
            rq: true,
            en: {
              lp: 'NurbsOrientationInterpolator'
            },
            ti: '.NurbsOrientationInterpolator'
          }, {
            n: 'nurbsPositionInterpolator',
            rq: true,
            en: {
              lp: 'NurbsPositionInterpolator'
            },
            ti: '.NurbsPositionInterpolator'
          }, {
            n: 'nurbsSurfaceInterpolator',
            rq: true,
            en: {
              lp: 'NurbsSurfaceInterpolator'
            },
            ti: '.NurbsSurfaceInterpolator'
          }, {
            n: 'nurbsSet',
            rq: true,
            en: {
              lp: 'NurbsSet'
            },
            ti: '.NurbsSet'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'rootUrl',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'rootUrl'
            },
            t: 'a'
          }, {
            n: 'child1Url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'child1Url'
            },
            t: 'a'
          }, {
            n: 'child2Url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'child2Url'
            },
            t: 'a'
          }, {
            n: 'child3Url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'child3Url'
            },
            t: 'a'
          }, {
            n: 'child4Url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'child4Url'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'range',
            ti: 'Float',
            an: {
              lp: 'range'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DParametricGeometryNode',
        bti: '.X3DGeometryNode'
      }, {
        ln: 'Sound',
        tn: null,
        bti: '.X3DSoundNode',
        ps: [{
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'intensity',
            ti: 'Float',
            an: {
              lp: 'intensity'
            },
            t: 'a'
          }, {
            n: 'location',
            an: {
              lp: 'location'
            },
            t: 'a'
          }, {
            n: 'maxBack',
            ti: 'Float',
            an: {
              lp: 'maxBack'
            },
            t: 'a'
          }, {
            n: 'maxFront',
            ti: 'Float',
            an: {
              lp: 'maxFront'
            },
            t: 'a'
          }, {
            n: 'minBack',
            ti: 'Float',
            an: {
              lp: 'minBack'
            },
            t: 'a'
          }, {
            n: 'minFront',
            ti: 'Float',
            an: {
              lp: 'minFront'
            },
            t: 'a'
          }, {
            n: 'priority',
            ti: 'Float',
            an: {
              lp: 'priority'
            },
            t: 'a'
          }, {
            n: 'spatialize',
            ti: 'Boolean',
            an: {
              lp: 'spatialize'
            },
            t: 'a'
          }]
      }, {
        ln: 'BooleanTrigger',
        tn: null,
        bti: '.X3DTriggerNode'
      }, {
        ln: 'X3DScriptNode',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'IS'
                },
                ti: '.IS'
              }, {
                en: {
                  lp: 'field'
                },
                ti: '.Field'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }],
            t: 'ers'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DAppearanceChildNode',
        bti: '.X3DNode'
      }, {
        ln: 'CADPart',
        tn: null,
        bti: '.X3DProductStructureChildNode',
        ps: [{
            n: 'cadFaceOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'CADFace'
                },
                ti: '.CADFace'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'SquadOrientationInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }, {
            n: 'normalizeVelocity',
            ti: 'Boolean',
            an: {
              lp: 'normalizeVelocity'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DKeyDeviceSensorNode',
        bti: '.X3DSensorNode'
      }, {
        ln: 'WindPhysicsModel',
        tn: null,
        bti: '.X3DParticlePhysicsModelNode',
        ps: [{
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'gustiness',
            ti: 'Float',
            an: {
              lp: 'gustiness'
            },
            t: 'a'
          }, {
            n: 'speed',
            ti: 'Float',
            an: {
              lp: 'speed'
            },
            t: 'a'
          }, {
            n: 'turbulence',
            ti: 'Float',
            an: {
              lp: 'turbulence'
            },
            t: 'a'
          }]
      }, {
        ln: 'LayoutGroup',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'rest',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'Layout'
                },
                ti: '.Layout'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }],
            t: 'ers'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointLight',
        tn: null,
        bti: '.X3DLightNode',
        ps: [{
            n: 'attenuation',
            an: {
              lp: 'attenuation'
            },
            t: 'a'
          }, {
            n: 'location',
            an: {
              lp: 'location'
            },
            t: 'a'
          }, {
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'global',
            ti: 'Boolean',
            an: {
              lp: 'global'
            },
            t: 'a'
          }]
      }, {
        ln: 'ClipPlane',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'plane',
            an: {
              lp: 'plane'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeSensor',
        tn: null,
        bti: '.X3DTimeDependentNode',
        ps: [{
            n: 'cycleInterval',
            ti: 'Double',
            an: {
              lp: 'cycleInterval'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }]
      }, {
        ln: 'IndexedFaceSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'convex',
            ti: 'Boolean',
            an: {
              lp: 'convex'
            },
            t: 'a'
          }, {
            n: 'creaseAngle',
            ti: 'Float',
            an: {
              lp: 'creaseAngle'
            },
            t: 'a'
          }, {
            n: 'colorIndex',
            an: {
              lp: 'colorIndex'
            },
            t: 'a'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }, {
            n: 'normalIndex',
            an: {
              lp: 'normalIndex'
            },
            t: 'a'
          }, {
            n: 'texCoordIndex',
            an: {
              lp: 'texCoordIndex'
            },
            t: 'a'
          }]
      }, {
        ln: 'StringSensor',
        tn: null,
        bti: '.X3DKeyDeviceSensorNode',
        ps: [{
            n: 'deletionAllowed',
            ti: 'Boolean',
            an: {
              lp: 'deletionAllowed'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoCoordinate',
        tn: null,
        bti: '.X3DCoordinateNode',
        ps: [{
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Inline',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'load',
            ti: 'Boolean',
            an: {
              lp: 'load'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsSurfaceInterpolator',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'uDimension',
            ti: 'Integer',
            an: {
              lp: 'uDimension'
            },
            t: 'a'
          }, {
            n: 'vDimension',
            ti: 'Integer',
            an: {
              lp: 'vDimension'
            },
            t: 'a'
          }, {
            n: 'uKnot',
            an: {
              lp: 'uKnot'
            },
            t: 'a'
          }, {
            n: 'vKnot',
            an: {
              lp: 'vKnot'
            },
            t: 'a'
          }, {
            n: 'uOrder',
            ti: 'Integer',
            an: {
              lp: 'uOrder'
            },
            t: 'a'
          }, {
            n: 'vOrder',
            ti: 'Integer',
            an: {
              lp: 'vOrder'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }]
      }, {
        ln: 'Head',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'component',
            mno: 0,
            col: true,
            en: {
              lp: 'component'
            },
            ti: '.Component'
          }, {
            n: 'unit',
            mno: 0,
            col: true,
            en: {
              lp: 'unit'
            },
            ti: '.Unit'
          }, {
            n: 'meta',
            mno: 0,
            col: true,
            en: {
              lp: 'meta'
            },
            ti: '.Meta'
          }]
      }, {
        ln: 'Matrix4VertexAttribute',
        tn: null,
        bti: '.X3DVertexAttributeNode',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DGroupingNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'backgroundOrColorInterpolatorOrCoordinateInterpolator',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ROUTE'
                },
                ti: '.ROUTE'
              }, {
                en: {
                  lp: 'ExternProtoDeclare'
                },
                ti: '.ExternProtoDeclare'
              }, {
                en: {
                  lp: 'ProtoDeclare'
                },
                ti: '.ProtoDeclare'
              }, {
                en: {
                  lp: 'IMPORT'
                },
                ti: '.IMPORT'
              }, {
                en: {
                  lp: 'EXPORT'
                },
                ti: '.EXPORT'
              }],
            t: 'es'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DChaserNode',
        bti: '.X3DFollowerNode',
        ps: [{
            n: 'duration',
            ti: 'Double',
            an: {
              lp: 'duration'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'QuadSet',
        tn: null,
        bti: '.X3DComposedGeometryNode'
      }, {
        ln: 'OrientationDamper',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'ColorInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'IntegerSequencer',
        tn: null,
        bti: '.X3DSequencerNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DInfoNode',
        bti: '.X3DChildNode'
      }, {
        ln: 'IndexedTriangleStripSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'index',
            an: {
              lp: 'index'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DPickSensorNode',
        bti: '.X3DSensorNode',
        ps: [{
            n: 'objectType',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'objectType'
            },
            t: 'a'
          }, {
            n: 'intersectionType',
            an: {
              lp: 'intersectionType'
            },
            t: 'a'
          }, {
            n: 'sortOrder',
            an: {
              lp: 'sortOrder'
            },
            t: 'a'
          }]
      }, {
        ln: 'ViewpointGroup',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'viewpointOrOrthoViewpointOrGeoViewpoint',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }, {
            n: 'displayed',
            ti: 'Boolean',
            an: {
              lp: 'displayed'
            },
            t: 'a'
          }, {
            n: 'retainUserOffsets',
            ti: 'Boolean',
            an: {
              lp: 'retainUserOffsets'
            },
            t: 'a'
          }, {
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }]
      }, {
        ln: 'TriangleFanSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'fanCount',
            an: {
              lp: 'fanCount'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DParticleEmitterNode',
        bti: '.X3DNode',
        ps: [{
            n: 'speed',
            ti: 'Float',
            an: {
              lp: 'speed'
            },
            t: 'a'
          }, {
            n: 'variation',
            ti: 'Float',
            an: {
              lp: 'variation'
            },
            t: 'a'
          }, {
            n: 'mass',
            ti: 'Float',
            an: {
              lp: 'mass'
            },
            t: 'a'
          }, {
            n: 'surfaceArea',
            ti: 'Float',
            an: {
              lp: 'surfaceArea'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ROUTE',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'fromNode',
            rq: true,
            ti: 'IDREF',
            an: {
              lp: 'fromNode'
            },
            t: 'a'
          }, {
            n: 'fromField',
            rq: true,
            an: {
              lp: 'fromField'
            },
            t: 'a'
          }, {
            n: 'toNode',
            rq: true,
            ti: 'IDREF',
            an: {
              lp: 'toNode'
            },
            t: 'a'
          }, {
            n: 'toField',
            rq: true,
            an: {
              lp: 'toField'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransmitterPdu',
        tn: null,
        bti: '.X3DNetworkSensorNode',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'whichGeometry',
            ti: 'Integer',
            an: {
              lp: 'whichGeometry'
            },
            t: 'a'
          }, {
            n: 'readInterval',
            ti: 'Double',
            an: {
              lp: 'readInterval'
            },
            t: 'a'
          }, {
            n: 'writeInterval',
            ti: 'Double',
            an: {
              lp: 'writeInterval'
            },
            t: 'a'
          }, {
            n: 'networkMode',
            an: {
              lp: 'networkMode'
            },
            t: 'a'
          }, {
            n: 'siteID',
            ti: 'Integer',
            an: {
              lp: 'siteID'
            },
            t: 'a'
          }, {
            n: 'applicationID',
            ti: 'Integer',
            an: {
              lp: 'applicationID'
            },
            t: 'a'
          }, {
            n: 'entityID',
            ti: 'Integer',
            an: {
              lp: 'entityID'
            },
            t: 'a'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }, {
            n: 'port',
            ti: 'Integer',
            an: {
              lp: 'port'
            },
            t: 'a'
          }, {
            n: 'multicastRelayHost',
            an: {
              lp: 'multicastRelayHost'
            },
            t: 'a'
          }, {
            n: 'multicastRelayPort',
            ti: 'Integer',
            an: {
              lp: 'multicastRelayPort'
            },
            t: 'a'
          }, {
            n: 'rtpHeaderExpected',
            ti: 'Boolean',
            an: {
              lp: 'rtpHeaderExpected'
            },
            t: 'a'
          }, {
            n: 'radioID',
            ti: 'Integer',
            an: {
              lp: 'radioID'
            },
            t: 'a'
          }, {
            n: 'antennaLocation',
            an: {
              lp: 'antennaLocation'
            },
            t: 'a'
          }, {
            n: 'antennaPatternLength',
            ti: 'Integer',
            an: {
              lp: 'antennaPatternLength'
            },
            t: 'a'
          }, {
            n: 'antennaPatternType',
            ti: 'Integer',
            an: {
              lp: 'antennaPatternType'
            },
            t: 'a'
          }, {
            n: 'cryptoKeyID',
            ti: 'Integer',
            an: {
              lp: 'cryptoKeyID'
            },
            t: 'a'
          }, {
            n: 'cryptoSystem',
            ti: 'Integer',
            an: {
              lp: 'cryptoSystem'
            },
            t: 'a'
          }, {
            n: 'frequency',
            ti: 'Integer',
            an: {
              lp: 'frequency'
            },
            t: 'a'
          }, {
            n: 'inputSource',
            ti: 'Integer',
            an: {
              lp: 'inputSource'
            },
            t: 'a'
          }, {
            n: 'lengthOfModulationParameters',
            ti: 'Integer',
            an: {
              lp: 'lengthOfModulationParameters'
            },
            t: 'a'
          }, {
            n: 'modulationTypeDetail',
            ti: 'Integer',
            an: {
              lp: 'modulationTypeDetail'
            },
            t: 'a'
          }, {
            n: 'modulationTypeMajor',
            ti: 'Integer',
            an: {
              lp: 'modulationTypeMajor'
            },
            t: 'a'
          }, {
            n: 'modulationTypeSpreadSpectrum',
            ti: 'Integer',
            an: {
              lp: 'modulationTypeSpreadSpectrum'
            },
            t: 'a'
          }, {
            n: 'modulationTypeSystem',
            ti: 'Integer',
            an: {
              lp: 'modulationTypeSystem'
            },
            t: 'a'
          }, {
            n: 'power',
            ti: 'Float',
            an: {
              lp: 'power'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeCategory',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeCategory'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeCountry',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeCountry'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeDomain',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeDomain'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeKind',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeKind'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeNomenclature',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeNomenclature'
            },
            t: 'a'
          }, {
            n: 'radioEntityTypeNomenclatureVersion',
            ti: 'Integer',
            an: {
              lp: 'radioEntityTypeNomenclatureVersion'
            },
            t: 'a'
          }, {
            n: 'relativeAntennaLocation',
            an: {
              lp: 'relativeAntennaLocation'
            },
            t: 'a'
          }, {
            n: 'transmitFrequencyBandwidth',
            ti: 'Float',
            an: {
              lp: 'transmitFrequencyBandwidth'
            },
            t: 'a'
          }, {
            n: 'transmitState',
            ti: 'Integer',
            an: {
              lp: 'transmitState'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DTouchSensorNode',
        bti: '.X3DPointingDeviceSensorNode'
      }, {
        ln: 'X3DSequencerNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'key',
            an: {
              lp: 'key'
            },
            t: 'a'
          }]
      }, {
        ln: 'TriangleSet2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'vertices',
            an: {
              lp: 'vertices'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'HAnimJoint',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'hAnimJointOrHAnimSegmentOrHAnimDisplacer',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimDisplacer'
                },
                ti: '.HAnimDisplacer'
              }],
            t: 'es'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }, {
            n: 'skinCoordIndex',
            an: {
              lp: 'skinCoordIndex'
            },
            t: 'a'
          }, {
            n: 'skinCoordWeight',
            an: {
              lp: 'skinCoordWeight'
            },
            t: 'a'
          }, {
            n: 'llimit',
            an: {
              lp: 'llimit'
            },
            t: 'a'
          }, {
            n: 'ulimit',
            an: {
              lp: 'ulimit'
            },
            t: 'a'
          }, {
            n: 'limitOrientation',
            an: {
              lp: 'limitOrientation'
            },
            t: 'a'
          }, {
            n: 'stiffness',
            an: {
              lp: 'stiffness'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollidableShape',
        tn: null,
        bti: '.X3DNBodyCollidableNode',
        ps: [{
            n: 'shape',
            rq: true,
            en: {
              lp: 'Shape'
            },
            ti: '.Shape'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'GeoElevationGrid',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 5,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'FogCoordinate'
                },
                ti: '.FogCoordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'MultiTextureCoordinate'
                },
                ti: '.MultiTextureCoordinate'
              }],
            t: 'ers'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoGridOrigin',
            an: {
              lp: 'geoGridOrigin'
            },
            t: 'a'
          }, {
            n: 'height',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'colorPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'colorPerVertex'
            },
            t: 'a'
          }, {
            n: 'creaseAngle',
            ti: 'Float',
            an: {
              lp: 'creaseAngle'
            },
            t: 'a'
          }, {
            n: 'normalPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'normalPerVertex'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }, {
            n: 'xDimension',
            ti: 'Integer',
            an: {
              lp: 'xDimension'
            },
            t: 'a'
          }, {
            n: 'xSpacing',
            ti: 'Double',
            an: {
              lp: 'xSpacing'
            },
            t: 'a'
          }, {
            n: 'yScale',
            ti: 'Float',
            an: {
              lp: 'yScale'
            },
            t: 'a'
          }, {
            n: 'zDimension',
            ti: 'Integer',
            an: {
              lp: 'zDimension'
            },
            t: 'a'
          }, {
            n: 'zSpacing',
            ti: 'Double',
            an: {
              lp: 'zSpacing'
            },
            t: 'a'
          }]
      }, {
        ln: 'LoadSensor',
        tn: null,
        bti: '.X3DNetworkSensorNode',
        ps: [{
            n: 'loadSensorChildContentModel',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'ImageCubeMapTexture'
                },
                ti: '.ImageCubeMapTexture'
              }, {
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'PackagedShader'
                },
                ti: '.PackagedShader'
              }, {
                en: {
                  lp: 'ShaderPart'
                },
                ti: '.ShaderPart'
              }, {
                en: {
                  lp: 'ShaderProgram'
                },
                ti: '.ShaderProgram'
              }],
            t: 'es'
          }, {
            n: 'timeOut',
            ti: 'Double',
            an: {
              lp: 'timeOut'
            },
            t: 'a'
          }]
      }, {
        ln: 'ColorDamper',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordinateChaser',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNurbsSurfaceGeometryNode',
        bti: '.X3DParametricGeometryNode',
        ps: [{
            n: 'uClosed',
            ti: 'Boolean',
            an: {
              lp: 'uClosed'
            },
            t: 'a'
          }, {
            n: 'vClosed',
            ti: 'Boolean',
            an: {
              lp: 'vClosed'
            },
            t: 'a'
          }, {
            n: 'uDimension',
            ti: 'Integer',
            an: {
              lp: 'uDimension'
            },
            t: 'a'
          }, {
            n: 'vDimension',
            ti: 'Integer',
            an: {
              lp: 'vDimension'
            },
            t: 'a'
          }, {
            n: 'uKnot',
            an: {
              lp: 'uKnot'
            },
            t: 'a'
          }, {
            n: 'vKnot',
            an: {
              lp: 'vKnot'
            },
            t: 'a'
          }, {
            n: 'uOrder',
            ti: 'Integer',
            an: {
              lp: 'uOrder'
            },
            t: 'a'
          }, {
            n: 'vOrder',
            ti: 'Integer',
            an: {
              lp: 'vOrder'
            },
            t: 'a'
          }, {
            n: 'uTessellation',
            ti: 'Integer',
            an: {
              lp: 'uTessellation'
            },
            t: 'a'
          }, {
            n: 'vTessellation',
            ti: 'Integer',
            an: {
              lp: 'vTessellation'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DMaterialNode',
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'OpacityMapVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'imageTexture',
            rq: true,
            en: {
              lp: 'ImageTexture'
            },
            ti: '.ImageTexture'
          }, {
            n: 'pixelTexture',
            rq: true,
            en: {
              lp: 'PixelTexture'
            },
            ti: '.PixelTexture'
          }, {
            n: 'movieTexture',
            rq: true,
            en: {
              lp: 'MovieTexture'
            },
            ti: '.MovieTexture'
          }, {
            n: 'multiTexture',
            rq: true,
            en: {
              lp: 'MultiTexture'
            },
            ti: '.MultiTexture'
          }, {
            n: 'composedTexture3D',
            rq: true,
            en: {
              lp: 'ComposedTexture3D'
            },
            ti: '.ComposedTexture3D'
          }, {
            n: 'imageTexture3D',
            rq: true,
            en: {
              lp: 'ImageTexture3D'
            },
            ti: '.ImageTexture3D'
          }, {
            n: 'pixelTexture3D',
            rq: true,
            en: {
              lp: 'PixelTexture3D'
            },
            ti: '.PixelTexture3D'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'GeoViewpoint',
        tn: null,
        bti: '.X3DViewpointNode',
        ps: [{
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'centerOfRotation',
            an: {
              lp: 'centerOfRotation'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'fieldOfView',
            ti: 'Float',
            an: {
              lp: 'fieldOfView'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }, {
            n: 'speedFactor',
            ti: 'Float',
            an: {
              lp: 'speedFactor'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DPointingDeviceSensorNode',
        bti: '.X3DSensorNode',
        ps: [{
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DProductStructureChildNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'Viewport',
        tn: null,
        bti: '.X3DViewportNode',
        ps: [{
            n: 'clipBoundary',
            an: {
              lp: 'clipBoundary'
            },
            t: 'a'
          }]
      }, {
        ln: 'ScreenFontStyle',
        tn: null,
        bti: '.X3DFontStyleNode',
        ps: [{
            n: 'family',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'family'
            },
            t: 'a'
          }, {
            n: 'horizontal',
            ti: 'Boolean',
            an: {
              lp: 'horizontal'
            },
            t: 'a'
          }, {
            n: 'justify',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'justify'
            },
            t: 'a'
          }, {
            n: 'language',
            an: {
              lp: 'language'
            },
            t: 'a'
          }, {
            n: 'leftToRight',
            ti: 'Boolean',
            an: {
              lp: 'leftToRight'
            },
            t: 'a'
          }, {
            n: 'pointSize',
            ti: 'Float',
            an: {
              lp: 'pointSize'
            },
            t: 'a'
          }, {
            n: 'spacing',
            ti: 'Float',
            an: {
              lp: 'spacing'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'topToBottom',
            ti: 'Boolean',
            an: {
              lp: 'topToBottom'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsOrientationInterpolator',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'knot',
            an: {
              lp: 'knot'
            },
            t: 'a'
          }, {
            n: 'order',
            ti: 'Integer',
            an: {
              lp: 'order'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DPrototypeInstance',
        ps: [{
            n: 'fieldValue',
            mno: 0,
            col: true,
            en: {
              lp: 'fieldValue'
            },
            ti: '.FieldValue'
          }, {
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'metadataBoolean',
            rq: true,
            en: {
              lp: 'MetadataBoolean'
            },
            ti: '.MetadataBoolean'
          }, {
            n: 'metadataDouble',
            rq: true,
            en: {
              lp: 'MetadataDouble'
            },
            ti: '.MetadataDouble'
          }, {
            n: 'metadataFloat',
            rq: true,
            en: {
              lp: 'MetadataFloat'
            },
            ti: '.MetadataFloat'
          }, {
            n: 'metadataInteger',
            rq: true,
            en: {
              lp: 'MetadataInteger'
            },
            ti: '.MetadataInteger'
          }, {
            n: 'metadataSet',
            rq: true,
            en: {
              lp: 'MetadataSet'
            },
            ti: '.MetadataSet'
          }, {
            n: 'metadataString',
            rq: true,
            en: {
              lp: 'MetadataString'
            },
            ti: '.MetadataString'
          }]
      }, {
        ln: 'SignalPdu',
        tn: null,
        bti: '.X3DNetworkSensorNode',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'whichGeometry',
            ti: 'Integer',
            an: {
              lp: 'whichGeometry'
            },
            t: 'a'
          }, {
            n: 'readInterval',
            ti: 'Double',
            an: {
              lp: 'readInterval'
            },
            t: 'a'
          }, {
            n: 'writeInterval',
            ti: 'Double',
            an: {
              lp: 'writeInterval'
            },
            t: 'a'
          }, {
            n: 'networkMode',
            an: {
              lp: 'networkMode'
            },
            t: 'a'
          }, {
            n: 'siteID',
            ti: 'Integer',
            an: {
              lp: 'siteID'
            },
            t: 'a'
          }, {
            n: 'applicationID',
            ti: 'Integer',
            an: {
              lp: 'applicationID'
            },
            t: 'a'
          }, {
            n: 'entityID',
            ti: 'Integer',
            an: {
              lp: 'entityID'
            },
            t: 'a'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }, {
            n: 'port',
            ti: 'Integer',
            an: {
              lp: 'port'
            },
            t: 'a'
          }, {
            n: 'multicastRelayHost',
            an: {
              lp: 'multicastRelayHost'
            },
            t: 'a'
          }, {
            n: 'multicastRelayPort',
            ti: 'Integer',
            an: {
              lp: 'multicastRelayPort'
            },
            t: 'a'
          }, {
            n: 'rtpHeaderExpected',
            ti: 'Boolean',
            an: {
              lp: 'rtpHeaderExpected'
            },
            t: 'a'
          }, {
            n: 'radioID',
            ti: 'Integer',
            an: {
              lp: 'radioID'
            },
            t: 'a'
          }, {
            n: 'encodingScheme',
            ti: 'Integer',
            an: {
              lp: 'encodingScheme'
            },
            t: 'a'
          }, {
            n: 'tdlType',
            ti: 'Integer',
            an: {
              lp: 'tdlType'
            },
            t: 'a'
          }, {
            n: 'sampleRate',
            ti: 'Integer',
            an: {
              lp: 'sampleRate'
            },
            t: 'a'
          }, {
            n: 'samples',
            ti: 'Integer',
            an: {
              lp: 'samples'
            },
            t: 'a'
          }, {
            n: 'dataLength',
            ti: 'Integer',
            an: {
              lp: 'dataLength'
            },
            t: 'a'
          }, {
            n: 'data',
            an: {
              lp: 'data'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }]
      }, {
        ln: 'TexCoordDamper2D',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'FieldValue',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'fillPropertiesOrLinePropertiesOrMaterial',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FillProperties'
                },
                ti: '.FillProperties'
              }, {
                en: {
                  lp: 'LineProperties'
                },
                ti: '.LineProperties'
              }, {
                en: {
                  lp: 'Material'
                },
                ti: '.Material'
              }, {
                en: {
                  lp: 'TwoSidedMaterial'
                },
                ti: '.TwoSidedMaterial'
              }, {
                en: {
                  lp: 'ComposedShader'
                },
                ti: '.ComposedShader'
              }, {
                en: {
                  lp: 'PackagedShader'
                },
                ti: '.PackagedShader'
              }, {
                en: {
                  lp: 'ProgramShader'
                },
                ti: '.ProgramShader'
              }, {
                en: {
                  lp: 'ComposedCubeMapTexture'
                },
                ti: '.ComposedCubeMapTexture'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'MultiTexture'
                },
                ti: '.MultiTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'GeneratedCubeMapTexture'
                },
                ti: '.GeneratedCubeMapTexture'
              }, {
                en: {
                  lp: 'ImageCubeMapTexture'
                },
                ti: '.ImageCubeMapTexture'
              }, {
                en: {
                  lp: 'MultiTextureTransform'
                },
                ti: '.MultiTextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform'
                },
                ti: '.TextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform3D'
                },
                ti: '.TextureTransform3D'
              }, {
                en: {
                  lp: 'TextureTransformMatrix3D'
                },
                ti: '.TextureTransformMatrix3D'
              }, {
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Box'
                },
                ti: '.Box'
              }, {
                en: {
                  lp: 'Cone'
                },
                ti: '.Cone'
              }, {
                en: {
                  lp: 'Cylinder'
                },
                ti: '.Cylinder'
              }, {
                en: {
                  lp: 'IndexedFaceSet'
                },
                ti: '.IndexedFaceSet'
              }, {
                en: {
                  lp: 'IndexedLineSet'
                },
                ti: '.IndexedLineSet'
              }, {
                en: {
                  lp: 'IndexedTriangleFanSet'
                },
                ti: '.IndexedTriangleFanSet'
              }, {
                en: {
                  lp: 'IndexedTriangleSet'
                },
                ti: '.IndexedTriangleSet'
              }, {
                en: {
                  lp: 'IndexedTriangleStripSet'
                },
                ti: '.IndexedTriangleStripSet'
              }, {
                en: {
                  lp: 'LineSet'
                },
                ti: '.LineSet'
              }, {
                en: {
                  lp: 'PointSet'
                },
                ti: '.PointSet'
              }, {
                en: {
                  lp: 'Sphere'
                },
                ti: '.Sphere'
              }, {
                en: {
                  lp: 'TriangleFanSet'
                },
                ti: '.TriangleFanSet'
              }, {
                en: {
                  lp: 'TriangleSet'
                },
                ti: '.TriangleSet'
              }, {
                en: {
                  lp: 'TriangleStripSet'
                },
                ti: '.TriangleStripSet'
              }, {
                en: {
                  lp: 'ElevationGrid'
                },
                ti: '.ElevationGrid'
              }, {
                en: {
                  lp: 'Polyline2D'
                },
                ti: '.Polyline2D'
              }, {
                en: {
                  lp: 'Polypoint2D'
                },
                ti: '.Polypoint2D'
              }, {
                en: {
                  lp: 'Rectangle2D'
                },
                ti: '.Rectangle2D'
              }, {
                en: {
                  lp: 'TriangleSet2D'
                },
                ti: '.TriangleSet2D'
              }, {
                en: {
                  lp: 'Extrusion'
                },
                ti: '.Extrusion'
              }, {
                en: {
                  lp: 'Text'
                },
                ti: '.Text'
              }, {
                en: {
                  lp: 'Arc2D'
                },
                ti: '.Arc2D'
              }, {
                en: {
                  lp: 'ArcClose2D'
                },
                ti: '.ArcClose2D'
              }, {
                en: {
                  lp: 'Circle2D'
                },
                ti: '.Circle2D'
              }, {
                en: {
                  lp: 'Disk2D'
                },
                ti: '.Disk2D'
              }, {
                en: {
                  lp: 'QuadSet'
                },
                ti: '.QuadSet'
              }, {
                en: {
                  lp: 'IndexedQuadSet'
                },
                ti: '.IndexedQuadSet'
              }, {
                en: {
                  lp: 'GeoElevationGrid'
                },
                ti: '.GeoElevationGrid'
              }, {
                en: {
                  lp: 'NurbsCurve'
                },
                ti: '.NurbsCurve'
              }, {
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'Appearance'
                },
                ti: '.Appearance'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'FontStyle'
                },
                ti: '.FontStyle'
              }, {
                en: {
                  lp: 'ScreenFontStyle'
                },
                ti: '.ScreenFontStyle'
              }, {
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'Contour2D'
                },
                ti: '.Contour2D'
              }, {
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'Layer'
                },
                ti: '.Layer'
              }, {
                en: {
                  lp: 'LayoutLayer'
                },
                ti: '.LayoutLayer'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'BallJoint'
                },
                ti: '.BallJoint'
              }, {
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'CollisionCollection'
                },
                ti: '.CollisionCollection'
              }, {
                en: {
                  lp: 'CollisionSpace'
                },
                ti: '.CollisionSpace'
              }, {
                en: {
                  lp: 'Contact'
                },
                ti: '.Contact'
              }, {
                en: {
                  lp: 'DoubleAxisHingeJoint'
                },
                ti: '.DoubleAxisHingeJoint'
              }, {
                en: {
                  lp: 'MotorJoint'
                },
                ti: '.MotorJoint'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }, {
                en: {
                  lp: 'SingleAxisHingeJoint'
                },
                ti: '.SingleAxisHingeJoint'
              }, {
                en: {
                  lp: 'SliderJoint'
                },
                ti: '.SliderJoint'
              }, {
                en: {
                  lp: 'UniversalJoint'
                },
                ti: '.UniversalJoint'
              }],
            t: 'es'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'ArcClose2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'startAngle',
            ti: 'Float',
            an: {
              lp: 'startAngle'
            },
            t: 'a'
          }, {
            n: 'endAngle',
            ti: 'Float',
            an: {
              lp: 'endAngle'
            },
            t: 'a'
          }, {
            n: 'closureType',
            an: {
              lp: 'closureType'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNBodyCollidableNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'FogCoordinate',
        tn: null,
        bti: '.X3DCoordinateNode',
        ps: [{
            n: 'depth',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DComposedGeometryNode',
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'composedGeometryContentModel',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FloatVertexAttribute'
                },
                ti: '.FloatVertexAttribute'
              }, {
                en: {
                  lp: 'Matrix3VertexAttribute'
                },
                ti: '.Matrix3VertexAttribute'
              }, {
                en: {
                  lp: 'Matrix4VertexAttribute'
                },
                ti: '.Matrix4VertexAttribute'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'FogCoordinate'
                },
                ti: '.FogCoordinate'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'TextureCoordinate3D'
                },
                ti: '.TextureCoordinate3D'
              }, {
                en: {
                  lp: 'TextureCoordinate4D'
                },
                ti: '.TextureCoordinate4D'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'MultiTextureCoordinate'
                },
                ti: '.MultiTextureCoordinate'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'colorPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'colorPerVertex'
            },
            t: 'a'
          }, {
            n: 'normalPerVertex',
            ti: 'Boolean',
            an: {
              lp: 'normalPerVertex'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DTextureNode',
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'HAnimSite',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'CADAssembly',
        tn: null,
        bti: '.X3DProductStructureChildNode',
        ps: [{
            n: 'cadAssemblyOrCADPartOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }],
            t: 'es'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'UniversalJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'anchorPoint',
            an: {
              lp: 'anchorPoint'
            },
            t: 'a'
          }, {
            n: 'axis1',
            an: {
              lp: 'axis1'
            },
            t: 'a'
          }, {
            n: 'axis2',
            an: {
              lp: 'axis2'
            },
            t: 'a'
          }, {
            n: 'stop1Bounce',
            ti: 'Float',
            an: {
              lp: 'stop1Bounce'
            },
            t: 'a'
          }, {
            n: 'stop1ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop1ErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'stop2Bounce',
            ti: 'Float',
            an: {
              lp: 'stop2Bounce'
            },
            t: 'a'
          }, {
            n: 'stop2ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop2ErrorCorrection'
            },
            t: 'a'
          }]
      }, {
        ln: 'Unit',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'category',
            rq: true,
            an: {
              lp: 'category'
            },
            t: 'a'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'conversionFactor',
            rq: true,
            ti: 'Double',
            an: {
              lp: 'conversionFactor'
            },
            t: 'a'
          }]
      }, {
        ln: 'TexCoordChaser2D',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DMetadataObject',
        bti: '.X3DNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'reference',
            an: {
              lp: 'reference'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoTouchSensor',
        tn: null,
        bti: '.X3DTouchSensorNode',
        ps: [{
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureCoordinate4D',
        tn: null,
        bti: '.X3DTextureCoordinateNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }]
      }, {
        ln: 'Box',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'LineSet',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }],
            t: 'ers'
          }, {
            n: 'vertexCount',
            an: {
              lp: 'vertexCount'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionChaser',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'HAnimSegment',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'hAnimDisplacer',
            mno: 0,
            col: true,
            en: {
              lp: 'HAnimDisplacer'
            },
            ti: '.HAnimDisplacer'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'mass',
            ti: 'Float',
            an: {
              lp: 'mass'
            },
            t: 'a'
          }, {
            n: 'centerOfMass',
            an: {
              lp: 'centerOfMass'
            },
            t: 'a'
          }, {
            n: 'momentsOfInertia',
            an: {
              lp: 'momentsOfInertia'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DField'
      }, {
        ln: 'ComposedTexture3D',
        tn: null,
        bti: '.X3DTexture3DNode',
        ps: [{
            n: 'imageTextureAndPixelTextureAndMovieTexture',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'X3DBackgroundNode',
        bti: '.X3DBindableNode',
        ps: [{
            n: 'groundAngle',
            an: {
              lp: 'groundAngle'
            },
            t: 'a'
          }, {
            n: 'groundColor',
            an: {
              lp: 'groundColor'
            },
            t: 'a'
          }, {
            n: 'skyAngle',
            an: {
              lp: 'skyAngle'
            },
            t: 'a'
          }, {
            n: 'skyColor',
            an: {
              lp: 'skyColor'
            },
            t: 'a'
          }, {
            n: 'transparency',
            ti: 'Float',
            an: {
              lp: 'transparency'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureTransform',
        tn: null,
        bti: '.X3DTextureTransformNode',
        ps: [{
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            ti: 'Float',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'ShadedVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'rest',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'Material'
                },
                ti: '.Material'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }],
            t: 'ers'
          }, {
            n: 'lighting',
            ti: 'Boolean',
            an: {
              lp: 'lighting'
            },
            t: 'a'
          }, {
            n: 'shadows',
            ti: 'Boolean',
            an: {
              lp: 'shadows'
            },
            t: 'a'
          }, {
            n: 'phaseFunction',
            an: {
              lp: 'phaseFunction'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DEnvironmentalSensorNode',
        bti: '.X3DSensorNode',
        ps: [{
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureProperties',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'anisotropicDegree',
            ti: 'Float',
            an: {
              lp: 'anisotropicDegree'
            },
            t: 'a'
          }, {
            n: 'borderColor',
            an: {
              lp: 'borderColor'
            },
            t: 'a'
          }, {
            n: 'borderWidth',
            ti: 'Integer',
            an: {
              lp: 'borderWidth'
            },
            t: 'a'
          }, {
            n: 'boundaryModeS',
            an: {
              lp: 'boundaryModeS'
            },
            t: 'a'
          }, {
            n: 'boundaryModeT',
            an: {
              lp: 'boundaryModeT'
            },
            t: 'a'
          }, {
            n: 'boundaryModeR',
            an: {
              lp: 'boundaryModeR'
            },
            t: 'a'
          }, {
            n: 'magnificationFilter',
            an: {
              lp: 'magnificationFilter'
            },
            t: 'a'
          }, {
            n: 'minificationFilter',
            an: {
              lp: 'minificationFilter'
            },
            t: 'a'
          }, {
            n: 'textureCompression',
            an: {
              lp: 'textureCompression'
            },
            t: 'a'
          }, {
            n: 'texturePriority',
            ti: 'Float',
            an: {
              lp: 'texturePriority'
            },
            t: 'a'
          }, {
            n: 'generateMipMaps',
            ti: 'Boolean',
            an: {
              lp: 'generateMipMaps'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ReceiverPdu',
        tn: null,
        bti: '.X3DNetworkSensorNode',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'whichGeometry',
            ti: 'Integer',
            an: {
              lp: 'whichGeometry'
            },
            t: 'a'
          }, {
            n: 'readInterval',
            ti: 'Double',
            an: {
              lp: 'readInterval'
            },
            t: 'a'
          }, {
            n: 'writeInterval',
            ti: 'Double',
            an: {
              lp: 'writeInterval'
            },
            t: 'a'
          }, {
            n: 'networkMode',
            an: {
              lp: 'networkMode'
            },
            t: 'a'
          }, {
            n: 'siteID',
            ti: 'Integer',
            an: {
              lp: 'siteID'
            },
            t: 'a'
          }, {
            n: 'applicationID',
            ti: 'Integer',
            an: {
              lp: 'applicationID'
            },
            t: 'a'
          }, {
            n: 'entityID',
            ti: 'Integer',
            an: {
              lp: 'entityID'
            },
            t: 'a'
          }, {
            n: 'address',
            an: {
              lp: 'address'
            },
            t: 'a'
          }, {
            n: 'port',
            ti: 'Integer',
            an: {
              lp: 'port'
            },
            t: 'a'
          }, {
            n: 'multicastRelayHost',
            an: {
              lp: 'multicastRelayHost'
            },
            t: 'a'
          }, {
            n: 'multicastRelayPort',
            ti: 'Integer',
            an: {
              lp: 'multicastRelayPort'
            },
            t: 'a'
          }, {
            n: 'rtpHeaderExpected',
            ti: 'Boolean',
            an: {
              lp: 'rtpHeaderExpected'
            },
            t: 'a'
          }, {
            n: 'radioID',
            ti: 'Integer',
            an: {
              lp: 'radioID'
            },
            t: 'a'
          }, {
            n: 'receivedPower',
            ti: 'Float',
            an: {
              lp: 'receivedPower'
            },
            t: 'a'
          }, {
            n: 'receiverState',
            ti: 'Integer',
            an: {
              lp: 'receiverState'
            },
            t: 'a'
          }, {
            n: 'transmitterSiteID',
            ti: 'Integer',
            an: {
              lp: 'transmitterSiteID'
            },
            t: 'a'
          }, {
            n: 'transmitterApplicationID',
            ti: 'Integer',
            an: {
              lp: 'transmitterApplicationID'
            },
            t: 'a'
          }, {
            n: 'transmitterEntityID',
            ti: 'Integer',
            an: {
              lp: 'transmitterEntityID'
            },
            t: 'a'
          }, {
            n: 'transmitterRadioID',
            ti: 'Integer',
            an: {
              lp: 'transmitterRadioID'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoTransform',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'geoCenter',
            an: {
              lp: 'geoCenter'
            },
            t: 'a'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'BooleanFilter',
        tn: null,
        bti: '.X3DChildNode'
      }, {
        ln: 'LayerSet',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'layerOrLayoutLayerOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Layer'
                },
                ti: '.Layer'
              }, {
                en: {
                  lp: 'LayoutLayer'
                },
                ti: '.LayoutLayer'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'activeLayer',
            ti: 'Integer',
            an: {
              lp: 'activeLayer'
            },
            t: 'a'
          }, {
            n: 'order',
            an: {
              lp: 'order'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoProximitySensor',
        tn: null,
        bti: '.X3DEnvironmentalSensorNode',
        ps: [{
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCenter',
            an: {
              lp: 'geoCenter'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureCoordinateGenerator',
        tn: null,
        bti: '.X3DTextureCoordinateNode',
        ps: [{
            n: 'mode',
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'parameter',
            an: {
              lp: 'parameter'
            },
            t: 'a'
          }]
      }, {
        ln: 'Scene',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'metadataBooleanOrMetadataDoubleOrMetadataFloat',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ROUTE'
                },
                ti: '.ROUTE'
              }, {
                en: {
                  lp: 'ExternProtoDeclare'
                },
                ti: '.ExternProtoDeclare'
              }, {
                en: {
                  lp: 'ProtoDeclare'
                },
                ti: '.ProtoDeclare'
              }, {
                en: {
                  lp: 'IMPORT'
                },
                ti: '.IMPORT'
              }, {
                en: {
                  lp: 'EXPORT'
                },
                ti: '.EXPORT'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ScalarDamper',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            ti: 'Float',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            ti: 'Float',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointPickSensor',
        tn: null,
        bti: '.X3DPickSensorNode',
        ps: [{
            n: 'pointSet',
            rq: true,
            en: {
              lp: 'PointSet'
            },
            ti: '.PointSet'
          }, {
            n: 'anchorOrBillboardOrCollision',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'LayoutGroup'
                },
                ti: '.LayoutGroup'
              }, {
                en: {
                  lp: 'ScreenGroup'
                },
                ti: '.ScreenGroup'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'X3DTextureTransformNode',
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoLocation',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }]
      }, {
        ln: 'IntegerTrigger',
        tn: null,
        bti: '.X3DTriggerNode',
        ps: [{
            n: 'integerKey',
            ti: 'Integer',
            an: {
              lp: 'integerKey'
            },
            t: 'a'
          }]
      }, {
        ln: 'ToneMappedVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'composedTexture3D',
            rq: true,
            en: {
              lp: 'ComposedTexture3D'
            },
            ti: '.ComposedTexture3D'
          }, {
            n: 'imageTexture3D',
            rq: true,
            en: {
              lp: 'ImageTexture3D'
            },
            ti: '.ImageTexture3D'
          }, {
            n: 'pixelTexture3D',
            rq: true,
            en: {
              lp: 'PixelTexture3D'
            },
            ti: '.PixelTexture3D'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'coolColor',
            an: {
              lp: 'coolColor'
            },
            t: 'a'
          }, {
            n: 'warmColor',
            an: {
              lp: 'warmColor'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DVolumeDataNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'dimensions',
            an: {
              lp: 'dimensions'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'HAnimDisplacer',
        tn: null,
        bti: '.X3DGeometricPropertyNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }, {
            n: 'displacements',
            an: {
              lp: 'displacements'
            },
            t: 'a'
          }, {
            n: 'weight',
            ti: 'Float',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Disk2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'innerRadius',
            ti: 'Float',
            an: {
              lp: 'innerRadius'
            },
            t: 'a'
          }, {
            n: 'outerRadius',
            ti: 'Float',
            an: {
              lp: 'outerRadius'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'EdgeEnhancementVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'composedTexture3D',
            rq: true,
            en: {
              lp: 'ComposedTexture3D'
            },
            ti: '.ComposedTexture3D'
          }, {
            n: 'imageTexture3D',
            rq: true,
            en: {
              lp: 'ImageTexture3D'
            },
            ti: '.ImageTexture3D'
          }, {
            n: 'pixelTexture3D',
            rq: true,
            en: {
              lp: 'PixelTexture3D'
            },
            ti: '.PixelTexture3D'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'edgeColor',
            an: {
              lp: 'edgeColor'
            },
            t: 'a'
          }, {
            n: 'gradientThreshold',
            ti: 'Float',
            an: {
              lp: 'gradientThreshold'
            },
            t: 'a'
          }]
      }, {
        ln: 'OrthoViewpoint',
        tn: null,
        bti: '.X3DViewpointNode',
        ps: [{
            n: 'centerOfRotation',
            an: {
              lp: 'centerOfRotation'
            },
            t: 'a'
          }, {
            n: 'fieldOfView',
            an: {
              lp: 'fieldOfView'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }]
      }, {
        ln: 'Arc2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'startAngle',
            ti: 'Float',
            an: {
              lp: 'startAngle'
            },
            t: 'a'
          }, {
            n: 'endAngle',
            ti: 'Float',
            an: {
              lp: 'endAngle'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProtoBody',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'sceneGraphFragmentWithPrototypeDeclarationsContentModel',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FillProperties'
                },
                ti: '.FillProperties'
              }, {
                en: {
                  lp: 'LineProperties'
                },
                ti: '.LineProperties'
              }, {
                en: {
                  lp: 'Material'
                },
                ti: '.Material'
              }, {
                en: {
                  lp: 'TwoSidedMaterial'
                },
                ti: '.TwoSidedMaterial'
              }, {
                en: {
                  lp: 'ComposedShader'
                },
                ti: '.ComposedShader'
              }, {
                en: {
                  lp: 'PackagedShader'
                },
                ti: '.PackagedShader'
              }, {
                en: {
                  lp: 'ProgramShader'
                },
                ti: '.ProgramShader'
              }, {
                en: {
                  lp: 'ComposedCubeMapTexture'
                },
                ti: '.ComposedCubeMapTexture'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'MultiTexture'
                },
                ti: '.MultiTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'GeneratedCubeMapTexture'
                },
                ti: '.GeneratedCubeMapTexture'
              }, {
                en: {
                  lp: 'ImageCubeMapTexture'
                },
                ti: '.ImageCubeMapTexture'
              }, {
                en: {
                  lp: 'MultiTextureTransform'
                },
                ti: '.MultiTextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform'
                },
                ti: '.TextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform3D'
                },
                ti: '.TextureTransform3D'
              }, {
                en: {
                  lp: 'TextureTransformMatrix3D'
                },
                ti: '.TextureTransformMatrix3D'
              }, {
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Box'
                },
                ti: '.Box'
              }, {
                en: {
                  lp: 'Cone'
                },
                ti: '.Cone'
              }, {
                en: {
                  lp: 'Cylinder'
                },
                ti: '.Cylinder'
              }, {
                en: {
                  lp: 'IndexedFaceSet'
                },
                ti: '.IndexedFaceSet'
              }, {
                en: {
                  lp: 'IndexedLineSet'
                },
                ti: '.IndexedLineSet'
              }, {
                en: {
                  lp: 'IndexedTriangleFanSet'
                },
                ti: '.IndexedTriangleFanSet'
              }, {
                en: {
                  lp: 'IndexedTriangleSet'
                },
                ti: '.IndexedTriangleSet'
              }, {
                en: {
                  lp: 'IndexedTriangleStripSet'
                },
                ti: '.IndexedTriangleStripSet'
              }, {
                en: {
                  lp: 'LineSet'
                },
                ti: '.LineSet'
              }, {
                en: {
                  lp: 'PointSet'
                },
                ti: '.PointSet'
              }, {
                en: {
                  lp: 'Sphere'
                },
                ti: '.Sphere'
              }, {
                en: {
                  lp: 'TriangleFanSet'
                },
                ti: '.TriangleFanSet'
              }, {
                en: {
                  lp: 'TriangleSet'
                },
                ti: '.TriangleSet'
              }, {
                en: {
                  lp: 'TriangleStripSet'
                },
                ti: '.TriangleStripSet'
              }, {
                en: {
                  lp: 'ElevationGrid'
                },
                ti: '.ElevationGrid'
              }, {
                en: {
                  lp: 'Polyline2D'
                },
                ti: '.Polyline2D'
              }, {
                en: {
                  lp: 'Polypoint2D'
                },
                ti: '.Polypoint2D'
              }, {
                en: {
                  lp: 'Rectangle2D'
                },
                ti: '.Rectangle2D'
              }, {
                en: {
                  lp: 'TriangleSet2D'
                },
                ti: '.TriangleSet2D'
              }, {
                en: {
                  lp: 'Extrusion'
                },
                ti: '.Extrusion'
              }, {
                en: {
                  lp: 'Text'
                },
                ti: '.Text'
              }, {
                en: {
                  lp: 'Arc2D'
                },
                ti: '.Arc2D'
              }, {
                en: {
                  lp: 'ArcClose2D'
                },
                ti: '.ArcClose2D'
              }, {
                en: {
                  lp: 'Circle2D'
                },
                ti: '.Circle2D'
              }, {
                en: {
                  lp: 'Disk2D'
                },
                ti: '.Disk2D'
              }, {
                en: {
                  lp: 'QuadSet'
                },
                ti: '.QuadSet'
              }, {
                en: {
                  lp: 'IndexedQuadSet'
                },
                ti: '.IndexedQuadSet'
              }, {
                en: {
                  lp: 'GeoElevationGrid'
                },
                ti: '.GeoElevationGrid'
              }, {
                en: {
                  lp: 'NurbsCurve'
                },
                ti: '.NurbsCurve'
              }, {
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'Appearance'
                },
                ti: '.Appearance'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'FontStyle'
                },
                ti: '.FontStyle'
              }, {
                en: {
                  lp: 'ScreenFontStyle'
                },
                ti: '.ScreenFontStyle'
              }, {
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'Contour2D'
                },
                ti: '.Contour2D'
              }, {
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'Layer'
                },
                ti: '.Layer'
              }, {
                en: {
                  lp: 'LayoutLayer'
                },
                ti: '.LayoutLayer'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'BallJoint'
                },
                ti: '.BallJoint'
              }, {
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'CollisionCollection'
                },
                ti: '.CollisionCollection'
              }, {
                en: {
                  lp: 'CollisionSpace'
                },
                ti: '.CollisionSpace'
              }, {
                en: {
                  lp: 'Contact'
                },
                ti: '.Contact'
              }, {
                en: {
                  lp: 'DoubleAxisHingeJoint'
                },
                ti: '.DoubleAxisHingeJoint'
              }, {
                en: {
                  lp: 'MotorJoint'
                },
                ti: '.MotorJoint'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }, {
                en: {
                  lp: 'SingleAxisHingeJoint'
                },
                ti: '.SingleAxisHingeJoint'
              }, {
                en: {
                  lp: 'SliderJoint'
                },
                ti: '.SliderJoint'
              }, {
                en: {
                  lp: 'UniversalJoint'
                },
                ti: '.UniversalJoint'
              }, {
                en: {
                  lp: 'ROUTE'
                },
                ti: '.ROUTE'
              }, {
                en: {
                  lp: 'ExternProtoDeclare'
                },
                ti: '.ExternProtoDeclare'
              }, {
                en: {
                  lp: 'ProtoDeclare'
                },
                ti: '.ProtoDeclare'
              }, {
                en: {
                  lp: 'IMPORT'
                },
                ti: '.IMPORT'
              }, {
                en: {
                  lp: 'EXPORT'
                },
                ti: '.EXPORT'
              }],
            t: 'es'
          }]
      }, {
        ln: 'Switch',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'whichChoice',
            ti: 'Integer',
            an: {
              lp: 'whichChoice'
            },
            t: 'a'
          }]
      }, {
        ln: 'Script',
        tn: null,
        bti: '.X3DScriptNode',
        ps: [{
            n: 'directOutput',
            ti: 'Boolean',
            an: {
              lp: 'directOutput'
            },
            t: 'a'
          }, {
            n: 'mustEvaluate',
            ti: 'Boolean',
            an: {
              lp: 'mustEvaluate'
            },
            t: 'a'
          }]
      }, {
        ln: 'CartoonVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'composedTexture3D',
            rq: true,
            en: {
              lp: 'ComposedTexture3D'
            },
            ti: '.ComposedTexture3D'
          }, {
            n: 'imageTexture3D',
            rq: true,
            en: {
              lp: 'ImageTexture3D'
            },
            ti: '.ImageTexture3D'
          }, {
            n: 'pixelTexture3D',
            rq: true,
            en: {
              lp: 'PixelTexture3D'
            },
            ti: '.PixelTexture3D'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'colorSteps',
            ti: 'Int',
            an: {
              lp: 'colorSteps'
            },
            t: 'a'
          }, {
            n: 'orthogonalColor',
            an: {
              lp: 'orthogonalColor'
            },
            t: 'a'
          }, {
            n: 'parallelColor',
            an: {
              lp: 'parallelColor'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProtoInterface',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'field',
            mno: 0,
            col: true,
            en: {
              lp: 'field'
            },
            ti: '.Field'
          }]
      }, {
        ln: 'X3DNodeMixedContent',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'IS'
                },
                ti: '.IS'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }],
            t: 'ers'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }]
      }, {
        ln: 'LineProperties',
        tn: null,
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'applied',
            ti: 'Boolean',
            an: {
              lp: 'applied'
            },
            t: 'a'
          }, {
            n: 'linetype',
            ti: 'Integer',
            an: {
              lp: 'linetype'
            },
            t: 'a'
          }, {
            n: 'linewidthScaleFactor',
            ti: 'Float',
            an: {
              lp: 'linewidthScaleFactor'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'PolylineEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DAppearanceNode',
        bti: '.X3DNode',
        ps: [{
            n: 'appearanceChildContentModel',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FillProperties'
                },
                ti: '.FillProperties'
              }, {
                en: {
                  lp: 'LineProperties'
                },
                ti: '.LineProperties'
              }, {
                en: {
                  lp: 'Material'
                },
                ti: '.Material'
              }, {
                en: {
                  lp: 'TwoSidedMaterial'
                },
                ti: '.TwoSidedMaterial'
              }, {
                en: {
                  lp: 'ComposedShader'
                },
                ti: '.ComposedShader'
              }, {
                en: {
                  lp: 'PackagedShader'
                },
                ti: '.PackagedShader'
              }, {
                en: {
                  lp: 'ProgramShader'
                },
                ti: '.ProgramShader'
              }, {
                en: {
                  lp: 'ComposedCubeMapTexture'
                },
                ti: '.ComposedCubeMapTexture'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'MultiTexture'
                },
                ti: '.MultiTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'GeneratedCubeMapTexture'
                },
                ti: '.GeneratedCubeMapTexture'
              }, {
                en: {
                  lp: 'ImageCubeMapTexture'
                },
                ti: '.ImageCubeMapTexture'
              }, {
                en: {
                  lp: 'MultiTextureTransform'
                },
                ti: '.MultiTextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform'
                },
                ti: '.TextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform3D'
                },
                ti: '.TextureTransform3D'
              }, {
                en: {
                  lp: 'TextureTransformMatrix3D'
                },
                ti: '.TextureTransformMatrix3D'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'CylinderSensor',
        tn: null,
        bti: '.X3DDragSensorNode',
        ps: [{
            n: 'axisRotation',
            an: {
              lp: 'axisRotation'
            },
            t: 'a'
          }, {
            n: 'diskAngle',
            ti: 'Float',
            an: {
              lp: 'diskAngle'
            },
            t: 'a'
          }, {
            n: 'maxAngle',
            ti: 'Float',
            an: {
              lp: 'maxAngle'
            },
            t: 'a'
          }, {
            n: 'minAngle',
            ti: 'Float',
            an: {
              lp: 'minAngle'
            },
            t: 'a'
          }, {
            n: 'offset',
            ti: 'Float',
            an: {
              lp: 'offset'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsSwungSurface',
        tn: null,
        bti: '.X3DParametricGeometryNode',
        ps: [{
            n: 'contourPolyline2DOrNurbsCurve2DOrProtoInstance',
            mno: 0,
            mxo: 2,
            col: true,
            etis: [{
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'NurbsCurve2D'
                },
                ti: '.NurbsCurve2D'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'OrientationInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'HAnimHumanoid',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'backgroundOrColorInterpolatorOrCoordinateInterpolator',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }],
            t: 'es'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }, {
            n: 'info',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'info'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeneratedCubeMapTexture',
        tn: null,
        bti: '.X3DEnvironmentTextureNode',
        ps: [{
            n: 'update',
            an: {
              lp: 'update'
            },
            t: 'a'
          }, {
            n: 'size',
            ti: 'Integer',
            an: {
              lp: 'size'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DFogObject',
        ps: [{
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'fogType',
            an: {
              lp: 'fogType'
            },
            t: 'a'
          }, {
            n: 'visibilityRange',
            ti: 'Float',
            an: {
              lp: 'visibilityRange'
            },
            t: 'a'
          }]
      }, {
        ln: 'ForcePhysicsModel',
        tn: null,
        bti: '.X3DParticlePhysicsModelNode',
        ps: [{
            n: 'force',
            an: {
              lp: 'force'
            },
            t: 'a'
          }]
      }, {
        ln: 'SliderJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'axis',
            an: {
              lp: 'axis'
            },
            t: 'a'
          }, {
            n: 'maxSeparation',
            ti: 'Float',
            an: {
              lp: 'maxSeparation'
            },
            t: 'a'
          }, {
            n: 'minSeparation',
            ti: 'Float',
            an: {
              lp: 'minSeparation'
            },
            t: 'a'
          }, {
            n: 'sliderForce',
            ti: 'Float',
            an: {
              lp: 'sliderForce'
            },
            t: 'a'
          }, {
            n: 'stopBounce',
            ti: 'Float',
            an: {
              lp: 'stopBounce'
            },
            t: 'a'
          }, {
            n: 'stopErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stopErrorCorrection'
            },
            t: 'a'
          }]
      }, {
        ln: 'Appearance',
        tn: null,
        bti: '.X3DAppearanceNode'
      }, {
        ln: 'X3DVolumeRenderStyleNode',
        bti: '.X3DNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParticleSystem',
        tn: null,
        bti: '.X3DShapeNode',
        ps: [{
            n: 'createParticles',
            ti: 'Boolean',
            an: {
              lp: 'createParticles'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'lifetimeVariation',
            ti: 'Float',
            an: {
              lp: 'lifetimeVariation'
            },
            t: 'a'
          }, {
            n: 'maxParticles',
            ti: 'Integer',
            an: {
              lp: 'maxParticles'
            },
            t: 'a'
          }, {
            n: 'particleLifetime',
            ti: 'Float',
            an: {
              lp: 'particleLifetime'
            },
            t: 'a'
          }, {
            n: 'particleSize',
            an: {
              lp: 'particleSize'
            },
            t: 'a'
          }, {
            n: 'colorKey',
            an: {
              lp: 'colorKey'
            },
            t: 'a'
          }, {
            n: 'geometryType',
            an: {
              lp: 'geometryType'
            },
            t: 'a'
          }, {
            n: 'texCoordKey',
            an: {
              lp: 'texCoordKey'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataDouble',
        tn: null,
        bti: '.X3DMetadataObject',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'Contact',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 4,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }],
            t: 'ers'
          }, {
            n: 'appliedParameters',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'appliedParameters'
            },
            t: 'a'
          }, {
            n: 'bounce',
            ti: 'Float',
            an: {
              lp: 'bounce'
            },
            t: 'a'
          }, {
            n: 'contactNormal',
            an: {
              lp: 'contactNormal'
            },
            t: 'a'
          }, {
            n: 'depth',
            ti: 'Float',
            an: {
              lp: 'depth'
            },
            t: 'a'
          }, {
            n: 'frictionCoefficients',
            an: {
              lp: 'frictionCoefficients'
            },
            t: 'a'
          }, {
            n: 'frictionDirection',
            an: {
              lp: 'frictionDirection'
            },
            t: 'a'
          }, {
            n: 'minBounceSpeed',
            ti: 'Float',
            an: {
              lp: 'minBounceSpeed'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }, {
            n: 'slipCoefficients',
            an: {
              lp: 'slipCoefficients'
            },
            t: 'a'
          }, {
            n: 'softnessConstantForceMix',
            ti: 'Float',
            an: {
              lp: 'softnessConstantForceMix'
            },
            t: 'a'
          }, {
            n: 'softnessErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'softnessErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'surfaceSpeed',
            an: {
              lp: 'surfaceSpeed'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'CADFace',
        tn: null,
        bti: '.X3DProductStructureChildNode',
        ps: [{
            n: 'shape',
            rq: true,
            en: {
              lp: 'Shape'
            },
            ti: '.Shape'
          }, {
            n: 'lod',
            rq: true,
            en: {
              lp: 'LOD'
            },
            ti: '.LOD'
          }, {
            n: 'transform',
            rq: true,
            en: {
              lp: 'Transform'
            },
            ti: '.Transform'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'DoubleAxisHingeJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'anchorPoint',
            an: {
              lp: 'anchorPoint'
            },
            t: 'a'
          }, {
            n: 'axis1',
            an: {
              lp: 'axis1'
            },
            t: 'a'
          }, {
            n: 'axis2',
            an: {
              lp: 'axis2'
            },
            t: 'a'
          }, {
            n: 'desiredAngularVelocity1',
            ti: 'Float',
            an: {
              lp: 'desiredAngularVelocity1'
            },
            t: 'a'
          }, {
            n: 'desiredAngularVelocity2',
            ti: 'Float',
            an: {
              lp: 'desiredAngularVelocity2'
            },
            t: 'a'
          }, {
            n: 'maxAngle1',
            ti: 'Float',
            an: {
              lp: 'maxAngle1'
            },
            t: 'a'
          }, {
            n: 'maxTorque1',
            ti: 'Float',
            an: {
              lp: 'maxTorque1'
            },
            t: 'a'
          }, {
            n: 'maxTorque2',
            ti: 'Float',
            an: {
              lp: 'maxTorque2'
            },
            t: 'a'
          }, {
            n: 'minAngle1',
            ti: 'Float',
            an: {
              lp: 'minAngle1'
            },
            t: 'a'
          }, {
            n: 'stop1Bounce',
            ti: 'Float',
            an: {
              lp: 'stop1Bounce'
            },
            t: 'a'
          }, {
            n: 'stop1ConstantForceMix',
            ti: 'Float',
            an: {
              lp: 'stop1ConstantForceMix'
            },
            t: 'a'
          }, {
            n: 'stop1ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop1ErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'suspensionErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'suspensionErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'suspensionForce',
            ti: 'Float',
            an: {
              lp: 'suspensionForce'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureTransformMatrix3D',
        tn: null,
        bti: '.X3DTextureTransformNode',
        ps: [{
            n: 'matrix',
            an: {
              lp: 'matrix'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3D',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'head',
            en: {
              lp: 'head'
            },
            ti: '.Head'
          }, {
            n: 'scene',
            rq: true,
            en: {
              lp: 'Scene'
            },
            ti: '.Scene'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'profile',
            rq: true,
            an: {
              lp: 'profile'
            },
            t: 'a'
          }]
      }, {
        ln: 'ScreenGroup',
        tn: null,
        bti: '.X3DGroupingNode'
      }, {
        ln: 'Layer',
        tn: null,
        bti: '.X3DLayerNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 3,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'X3DViewpointNode',
        bti: '.X3DBindableNode',
        ps: [{
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }, {
            n: 'jump',
            ti: 'Boolean',
            an: {
              lp: 'jump'
            },
            t: 'a'
          }, {
            n: 'orientation',
            an: {
              lp: 'orientation'
            },
            t: 'a'
          }, {
            n: 'retainUserOffsets',
            ti: 'Boolean',
            an: {
              lp: 'retainUserOffsets'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNurbsControlCurveNode',
        bti: '.X3DNode',
        ps: [{
            n: 'controlPoint',
            an: {
              lp: 'controlPoint'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DTriggerNode',
        bti: '.X3DChildNode'
      }, {
        ln: 'SilhouetteEnhancementVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'composedTexture3D',
            rq: true,
            en: {
              lp: 'ComposedTexture3D'
            },
            ti: '.ComposedTexture3D'
          }, {
            n: 'imageTexture3D',
            rq: true,
            en: {
              lp: 'ImageTexture3D'
            },
            ti: '.ImageTexture3D'
          }, {
            n: 'pixelTexture3D',
            rq: true,
            en: {
              lp: 'PixelTexture3D'
            },
            ti: '.PixelTexture3D'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'silhouetteBoundaryOpacity',
            ti: 'Float',
            an: {
              lp: 'silhouetteBoundaryOpacity'
            },
            t: 'a'
          }, {
            n: 'silhouetteRetainedOpacity',
            ti: 'Float',
            an: {
              lp: 'silhouetteRetainedOpacity'
            },
            t: 'a'
          }, {
            n: 'silhouetteSharpness',
            ti: 'Float',
            an: {
              lp: 'silhouetteSharpness'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollisionCollection',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'collidableOffsetOrCollidableShapeOrCollisionSpace',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSpace'
                },
                ti: '.CollisionSpace'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'appliedParameters',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'appliedParameters'
            },
            t: 'a'
          }, {
            n: 'bounce',
            ti: 'Float',
            an: {
              lp: 'bounce'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'frictionCoefficients',
            an: {
              lp: 'frictionCoefficients'
            },
            t: 'a'
          }, {
            n: 'minBounceSpeed',
            ti: 'Float',
            an: {
              lp: 'minBounceSpeed'
            },
            t: 'a'
          }, {
            n: 'slipFactors',
            an: {
              lp: 'slipFactors'
            },
            t: 'a'
          }, {
            n: 'softnessConstantForceMix',
            ti: 'Float',
            an: {
              lp: 'softnessConstantForceMix'
            },
            t: 'a'
          }, {
            n: 'softnessErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'softnessErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'surfaceSpeed',
            an: {
              lp: 'surfaceSpeed'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ImageTexture3D',
        tn: null,
        bti: '.X3DTexture3DNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'Polyline2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'lineSegments',
            an: {
              lp: 'lineSegments'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordinateInterpolator2D',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'BallJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'anchorPoint',
            an: {
              lp: 'anchorPoint'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DShaderNode',
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'language',
            an: {
              lp: 'language'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Field',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'fillPropertiesOrLinePropertiesOrMaterial',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'FillProperties'
                },
                ti: '.FillProperties'
              }, {
                en: {
                  lp: 'LineProperties'
                },
                ti: '.LineProperties'
              }, {
                en: {
                  lp: 'Material'
                },
                ti: '.Material'
              }, {
                en: {
                  lp: 'TwoSidedMaterial'
                },
                ti: '.TwoSidedMaterial'
              }, {
                en: {
                  lp: 'ComposedShader'
                },
                ti: '.ComposedShader'
              }, {
                en: {
                  lp: 'PackagedShader'
                },
                ti: '.PackagedShader'
              }, {
                en: {
                  lp: 'ProgramShader'
                },
                ti: '.ProgramShader'
              }, {
                en: {
                  lp: 'ComposedCubeMapTexture'
                },
                ti: '.ComposedCubeMapTexture'
              }, {
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'MultiTexture'
                },
                ti: '.MultiTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'GeneratedCubeMapTexture'
                },
                ti: '.GeneratedCubeMapTexture'
              }, {
                en: {
                  lp: 'ImageCubeMapTexture'
                },
                ti: '.ImageCubeMapTexture'
              }, {
                en: {
                  lp: 'MultiTextureTransform'
                },
                ti: '.MultiTextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform'
                },
                ti: '.TextureTransform'
              }, {
                en: {
                  lp: 'TextureTransform3D'
                },
                ti: '.TextureTransform3D'
              }, {
                en: {
                  lp: 'TextureTransformMatrix3D'
                },
                ti: '.TextureTransformMatrix3D'
              }, {
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'Box'
                },
                ti: '.Box'
              }, {
                en: {
                  lp: 'Cone'
                },
                ti: '.Cone'
              }, {
                en: {
                  lp: 'Cylinder'
                },
                ti: '.Cylinder'
              }, {
                en: {
                  lp: 'IndexedFaceSet'
                },
                ti: '.IndexedFaceSet'
              }, {
                en: {
                  lp: 'IndexedLineSet'
                },
                ti: '.IndexedLineSet'
              }, {
                en: {
                  lp: 'IndexedTriangleFanSet'
                },
                ti: '.IndexedTriangleFanSet'
              }, {
                en: {
                  lp: 'IndexedTriangleSet'
                },
                ti: '.IndexedTriangleSet'
              }, {
                en: {
                  lp: 'IndexedTriangleStripSet'
                },
                ti: '.IndexedTriangleStripSet'
              }, {
                en: {
                  lp: 'LineSet'
                },
                ti: '.LineSet'
              }, {
                en: {
                  lp: 'PointSet'
                },
                ti: '.PointSet'
              }, {
                en: {
                  lp: 'Sphere'
                },
                ti: '.Sphere'
              }, {
                en: {
                  lp: 'TriangleFanSet'
                },
                ti: '.TriangleFanSet'
              }, {
                en: {
                  lp: 'TriangleSet'
                },
                ti: '.TriangleSet'
              }, {
                en: {
                  lp: 'TriangleStripSet'
                },
                ti: '.TriangleStripSet'
              }, {
                en: {
                  lp: 'ElevationGrid'
                },
                ti: '.ElevationGrid'
              }, {
                en: {
                  lp: 'Polyline2D'
                },
                ti: '.Polyline2D'
              }, {
                en: {
                  lp: 'Polypoint2D'
                },
                ti: '.Polypoint2D'
              }, {
                en: {
                  lp: 'Rectangle2D'
                },
                ti: '.Rectangle2D'
              }, {
                en: {
                  lp: 'TriangleSet2D'
                },
                ti: '.TriangleSet2D'
              }, {
                en: {
                  lp: 'Extrusion'
                },
                ti: '.Extrusion'
              }, {
                en: {
                  lp: 'Text'
                },
                ti: '.Text'
              }, {
                en: {
                  lp: 'Arc2D'
                },
                ti: '.Arc2D'
              }, {
                en: {
                  lp: 'ArcClose2D'
                },
                ti: '.ArcClose2D'
              }, {
                en: {
                  lp: 'Circle2D'
                },
                ti: '.Circle2D'
              }, {
                en: {
                  lp: 'Disk2D'
                },
                ti: '.Disk2D'
              }, {
                en: {
                  lp: 'QuadSet'
                },
                ti: '.QuadSet'
              }, {
                en: {
                  lp: 'IndexedQuadSet'
                },
                ti: '.IndexedQuadSet'
              }, {
                en: {
                  lp: 'GeoElevationGrid'
                },
                ti: '.GeoElevationGrid'
              }, {
                en: {
                  lp: 'NurbsCurve'
                },
                ti: '.NurbsCurve'
              }, {
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'Appearance'
                },
                ti: '.Appearance'
              }, {
                en: {
                  lp: 'Color'
                },
                ti: '.Color'
              }, {
                en: {
                  lp: 'ColorRGBA'
                },
                ti: '.ColorRGBA'
              }, {
                en: {
                  lp: 'Coordinate'
                },
                ti: '.Coordinate'
              }, {
                en: {
                  lp: 'CoordinateDouble'
                },
                ti: '.CoordinateDouble'
              }, {
                en: {
                  lp: 'FontStyle'
                },
                ti: '.FontStyle'
              }, {
                en: {
                  lp: 'ScreenFontStyle'
                },
                ti: '.ScreenFontStyle'
              }, {
                en: {
                  lp: 'GeoCoordinate'
                },
                ti: '.GeoCoordinate'
              }, {
                en: {
                  lp: 'Normal'
                },
                ti: '.Normal'
              }, {
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'Contour2D'
                },
                ti: '.Contour2D'
              }, {
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'NurbsTextureCoordinate'
                },
                ti: '.NurbsTextureCoordinate'
              }, {
                en: {
                  lp: 'Layer'
                },
                ti: '.Layer'
              }, {
                en: {
                  lp: 'LayoutLayer'
                },
                ti: '.LayoutLayer'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'BallJoint'
                },
                ti: '.BallJoint'
              }, {
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'CollisionCollection'
                },
                ti: '.CollisionCollection'
              }, {
                en: {
                  lp: 'CollisionSpace'
                },
                ti: '.CollisionSpace'
              }, {
                en: {
                  lp: 'Contact'
                },
                ti: '.Contact'
              }, {
                en: {
                  lp: 'DoubleAxisHingeJoint'
                },
                ti: '.DoubleAxisHingeJoint'
              }, {
                en: {
                  lp: 'MotorJoint'
                },
                ti: '.MotorJoint'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }, {
                en: {
                  lp: 'SingleAxisHingeJoint'
                },
                ti: '.SingleAxisHingeJoint'
              }, {
                en: {
                  lp: 'SliderJoint'
                },
                ti: '.SliderJoint'
              }, {
                en: {
                  lp: 'UniversalJoint'
                },
                ti: '.UniversalJoint'
              }],
            t: 'es'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'accessType',
            rq: true,
            an: {
              lp: 'accessType'
            },
            t: 'a'
          }, {
            n: 'type',
            rq: true,
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'appinfo',
            an: {
              lp: 'appinfo'
            },
            t: 'a'
          }, {
            n: 'documentation',
            an: {
              lp: 'documentation'
            },
            t: 'a'
          }]
      }, {
        ln: 'MotorJoint',
        tn: null,
        bti: '.X3DRigidJointNode',
        ps: [{
            n: 'autoCalc',
            ti: 'Boolean',
            an: {
              lp: 'autoCalc'
            },
            t: 'a'
          }, {
            n: 'axis1Angle',
            ti: 'Float',
            an: {
              lp: 'axis1Angle'
            },
            t: 'a'
          }, {
            n: 'axis1Torque',
            ti: 'Float',
            an: {
              lp: 'axis1Torque'
            },
            t: 'a'
          }, {
            n: 'axis2Angle',
            ti: 'Float',
            an: {
              lp: 'axis2Angle'
            },
            t: 'a'
          }, {
            n: 'axis2Torque',
            ti: 'Float',
            an: {
              lp: 'axis2Torque'
            },
            t: 'a'
          }, {
            n: 'axis3Angle',
            ti: 'Float',
            an: {
              lp: 'axis3Angle'
            },
            t: 'a'
          }, {
            n: 'axis3Torque',
            ti: 'Float',
            an: {
              lp: 'axis3Torque'
            },
            t: 'a'
          }, {
            n: 'enabledAxes',
            ti: 'Int',
            an: {
              lp: 'enabledAxes'
            },
            t: 'a'
          }, {
            n: 'motor1Axis',
            an: {
              lp: 'motor1Axis'
            },
            t: 'a'
          }, {
            n: 'motor2Axis',
            an: {
              lp: 'motor2Axis'
            },
            t: 'a'
          }, {
            n: 'motor3Axis',
            an: {
              lp: 'motor3Axis'
            },
            t: 'a'
          }, {
            n: 'stop1Bounce',
            ti: 'Float',
            an: {
              lp: 'stop1Bounce'
            },
            t: 'a'
          }, {
            n: 'stop1ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop1ErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'stop2Bounce',
            ti: 'Float',
            an: {
              lp: 'stop2Bounce'
            },
            t: 'a'
          }, {
            n: 'stop2ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop2ErrorCorrection'
            },
            t: 'a'
          }, {
            n: 'stop3Bounce',
            ti: 'Float',
            an: {
              lp: 'stop3Bounce'
            },
            t: 'a'
          }, {
            n: 'stop3ErrorCorrection',
            ti: 'Float',
            an: {
              lp: 'stop3ErrorCorrection'
            },
            t: 'a'
          }]
      }, {
        ln: 'Matrix3VertexAttribute',
        tn: null,
        bti: '.X3DVertexAttributeNode',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransformSensor',
        tn: null,
        bti: '.X3DEnvironmentalSensorNode',
        ps: [{
            n: 'anchor',
            rq: true,
            en: {
              lp: 'Anchor'
            },
            ti: '.Anchor'
          }, {
            n: 'billboard',
            rq: true,
            en: {
              lp: 'Billboard'
            },
            ti: '.Billboard'
          }, {
            n: 'collision',
            rq: true,
            en: {
              lp: 'Collision'
            },
            ti: '.Collision'
          }, {
            n: 'group',
            rq: true,
            en: {
              lp: 'Group'
            },
            ti: '.Group'
          }, {
            n: 'lod',
            rq: true,
            en: {
              lp: 'LOD'
            },
            ti: '.LOD'
          }, {
            n: 'shape',
            rq: true,
            en: {
              lp: 'Shape'
            },
            ti: '.Shape'
          }, {
            n: 'staticGroup',
            rq: true,
            en: {
              lp: 'StaticGroup'
            },
            ti: '.StaticGroup'
          }, {
            n: '_switch',
            rq: true,
            en: {
              lp: 'Switch'
            },
            ti: '.Switch'
          }, {
            n: 'transform',
            rq: true,
            en: {
              lp: 'Transform'
            },
            ti: '.Transform'
          }, {
            n: 'espduTransform',
            rq: true,
            en: {
              lp: 'EspduTransform'
            },
            ti: '.EspduTransform'
          }, {
            n: 'receiverPdu',
            rq: true,
            en: {
              lp: 'ReceiverPdu'
            },
            ti: '.ReceiverPdu'
          }, {
            n: 'signalPdu',
            rq: true,
            en: {
              lp: 'SignalPdu'
            },
            ti: '.SignalPdu'
          }, {
            n: 'transmitterPdu',
            rq: true,
            en: {
              lp: 'TransmitterPdu'
            },
            ti: '.TransmitterPdu'
          }, {
            n: 'cadAssembly',
            rq: true,
            en: {
              lp: 'CADAssembly'
            },
            ti: '.CADAssembly'
          }, {
            n: 'cadLayer',
            rq: true,
            en: {
              lp: 'CADLayer'
            },
            ti: '.CADLayer'
          }, {
            n: 'cadPart',
            rq: true,
            en: {
              lp: 'CADPart'
            },
            ti: '.CADPart'
          }, {
            n: 'geoLocation',
            rq: true,
            en: {
              lp: 'GeoLocation'
            },
            ti: '.GeoLocation'
          }, {
            n: 'geoLOD',
            rq: true,
            en: {
              lp: 'GeoLOD'
            },
            ti: '.GeoLOD'
          }, {
            n: 'geoTransform',
            rq: true,
            en: {
              lp: 'GeoTransform'
            },
            ti: '.GeoTransform'
          }, {
            n: 'hAnimJoint',
            rq: true,
            en: {
              lp: 'HAnimJoint'
            },
            ti: '.HAnimJoint'
          }, {
            n: 'hAnimSegment',
            rq: true,
            en: {
              lp: 'HAnimSegment'
            },
            ti: '.HAnimSegment'
          }, {
            n: 'hAnimSite',
            rq: true,
            en: {
              lp: 'HAnimSite'
            },
            ti: '.HAnimSite'
          }, {
            n: 'pickableGroup',
            rq: true,
            en: {
              lp: 'PickableGroup'
            },
            ti: '.PickableGroup'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'MultiTexture',
        tn: null,
        bti: '.X3DTextureNode',
        ps: [{
            n: 'imageTextureOrMovieTextureOrPixelTexture',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'alpha',
            ti: 'Float',
            an: {
              lp: 'alpha'
            },
            t: 'a'
          }, {
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'function',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'function'
            },
            t: 'a'
          }, {
            n: 'mode',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'source',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'source'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoordinateDouble',
        tn: null,
        bti: '.X3DCoordinateNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Group',
        tn: null,
        bti: '.X3DGroupingNode'
      }, {
        ln: 'FloatVertexAttribute',
        tn: null,
        bti: '.X3DVertexAttributeNode',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'numComponents',
            ti: 'Int',
            an: {
              lp: 'numComponents'
            },
            t: 'a'
          }]
      }, {
        ln: 'ScalarInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataInteger',
        tn: null,
        bti: '.X3DMetadataObject',
        ps: [{
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DComposableVolumeRenderStyleNode',
        bti: '.X3DVolumeRenderStyleNode'
      }, {
        ln: 'Viewpoint',
        tn: null,
        bti: '.X3DViewpointNode',
        ps: [{
            n: 'centerOfRotation',
            an: {
              lp: 'centerOfRotation'
            },
            t: 'a'
          }, {
            n: 'fieldOfView',
            ti: 'Float',
            an: {
              lp: 'fieldOfView'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }]
      }, {
        ln: 'PixelTexture3D',
        tn: null,
        bti: '.X3DTexture3DNode',
        ps: [{
            n: 'image',
            an: {
              lp: 'image'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoMetadata',
        tn: null,
        bti: '.X3DInfoNode',
        ps: [{
            n: 'geoCoordinate',
            rq: true,
            en: {
              lp: 'GeoCoordinate'
            },
            ti: '.GeoCoordinate'
          }, {
            n: 'geoElevationGrid',
            rq: true,
            en: {
              lp: 'GeoElevationGrid'
            },
            ti: '.GeoElevationGrid'
          }, {
            n: 'geoLocation',
            rq: true,
            en: {
              lp: 'GeoLocation'
            },
            ti: '.GeoLocation'
          }, {
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoLOD',
            rq: true,
            en: {
              lp: 'GeoLOD'
            },
            ti: '.GeoLOD'
          }, {
            n: 'geoPositionInterpolator',
            rq: true,
            en: {
              lp: 'GeoPositionInterpolator'
            },
            ti: '.GeoPositionInterpolator'
          }, {
            n: 'geoProximitySensor',
            rq: true,
            en: {
              lp: 'GeoProximitySensor'
            },
            ti: '.GeoProximitySensor'
          }, {
            n: 'geoTouchSensor',
            rq: true,
            en: {
              lp: 'GeoTouchSensor'
            },
            ti: '.GeoTouchSensor'
          }, {
            n: 'geoTransform',
            rq: true,
            en: {
              lp: 'GeoTransform'
            },
            ti: '.GeoTransform'
          }, {
            n: 'geoViewpoint',
            rq: true,
            en: {
              lp: 'GeoViewpoint'
            },
            ti: '.GeoViewpoint'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'summary',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'summary'
            },
            t: 'a'
          }]
      }, {
        ln: 'Anchor',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }, {
            n: 'parameter',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'parameter'
            },
            t: 'a'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'PlaneSensor',
        tn: null,
        bti: '.X3DDragSensorNode',
        ps: [{
            n: 'axisRotation',
            an: {
              lp: 'axisRotation'
            },
            t: 'a'
          }, {
            n: 'maxPosition',
            an: {
              lp: 'maxPosition'
            },
            t: 'a'
          }, {
            n: 'minPosition',
            an: {
              lp: 'minPosition'
            },
            t: 'a'
          }, {
            n: 'offset',
            an: {
              lp: 'offset'
            },
            t: 'a'
          }]
      }, {
        ln: 'DISEntityTypeMapping',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'category',
            ti: 'Int',
            an: {
              lp: 'category'
            },
            t: 'a'
          }, {
            n: 'country',
            ti: 'Int',
            an: {
              lp: 'country'
            },
            t: 'a'
          }, {
            n: 'domain',
            ti: 'Int',
            an: {
              lp: 'domain'
            },
            t: 'a'
          }, {
            n: 'extra',
            ti: 'Int',
            an: {
              lp: 'extra'
            },
            t: 'a'
          }, {
            n: 'kind',
            ti: 'Int',
            an: {
              lp: 'kind'
            },
            t: 'a'
          }, {
            n: 'specific',
            ti: 'Int',
            an: {
              lp: 'specific'
            },
            t: 'a'
          }, {
            n: 'subcategory',
            ti: 'Int',
            an: {
              lp: 'subcategory'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProtoDeclare',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'protoInterface',
            en: {
              lp: 'ProtoInterface'
            },
            ti: '.ProtoInterface'
          }, {
            n: 'protoBody',
            rq: true,
            en: {
              lp: 'ProtoBody'
            },
            ti: '.ProtoBody'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'appinfo',
            an: {
              lp: 'appinfo'
            },
            t: 'a'
          }, {
            n: 'documentation',
            an: {
              lp: 'documentation'
            },
            t: 'a'
          }]
      }, {
        ln: 'XvlShell',
        tn: null,
        ps: [{
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'metadataDouble',
            rq: true,
            en: {
              lp: 'MetadataDouble'
            },
            ti: '.MetadataDouble'
          }, {
            n: 'metadataFloat',
            rq: true,
            en: {
              lp: 'MetadataFloat'
            },
            ti: '.MetadataFloat'
          }, {
            n: 'metadataInteger',
            rq: true,
            en: {
              lp: 'MetadataInteger'
            },
            ti: '.MetadataInteger'
          }, {
            n: 'metadataSet',
            rq: true,
            en: {
              lp: 'MetadataSet'
            },
            ti: '.MetadataSet'
          }, {
            n: 'metadataString',
            rq: true,
            en: {
              lp: 'MetadataString'
            },
            ti: '.MetadataString'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }, {
            n: 'shellType',
            an: {
              lp: 'shellType'
            },
            t: 'a'
          }, {
            n: 'numberOfDivisions',
            ti: 'Integer',
            an: {
              lp: 'numberOfDivisions'
            },
            t: 'a'
          }, {
            n: 'vertexRound',
            an: {
              lp: 'vertexRound'
            },
            t: 'a'
          }, {
            n: 'edgeBeginCoordIndex',
            an: {
              lp: 'edgeBeginCoordIndex'
            },
            t: 'a'
          }, {
            n: 'edgeEndCoordIndex',
            an: {
              lp: 'edgeEndCoordIndex'
            },
            t: 'a'
          }, {
            n: 'edgeRound',
            an: {
              lp: 'edgeRound'
            },
            t: 'a'
          }, {
            n: 'edgeBeginVector',
            an: {
              lp: 'edgeBeginVector'
            },
            t: 'a'
          }, {
            n: 'edgeEndVector',
            an: {
              lp: 'edgeEndVector'
            },
            t: 'a'
          }, {
            n: 'faceCoordIndex',
            an: {
              lp: 'faceCoordIndex'
            },
            t: 'a'
          }, {
            n: 'faceTexCoordIndex',
            an: {
              lp: 'faceTexCoordIndex'
            },
            t: 'a'
          }, {
            n: 'faceEmpty',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'faceEmpty'
            },
            t: 'a'
          }, {
            n: 'faceHidden',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'faceHidden'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Sphere',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'Normal',
        tn: null,
        bti: '.X3DNormalNode',
        ps: [{
            n: 'vector',
            an: {
              lp: 'vector'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComposedVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'blendedVolumeStyleOrBoundaryEnhancementVolumeStyleOrCartoonVolumeStyle',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'BlendedVolumeStyle'
                },
                ti: '.BlendedVolumeStyle'
              }, {
                en: {
                  lp: 'BoundaryEnhancementVolumeStyle'
                },
                ti: '.BoundaryEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'CartoonVolumeStyle'
                },
                ti: '.CartoonVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedVolumeStyle'
                },
                ti: '.ComposedVolumeStyle'
              }, {
                en: {
                  lp: 'EdgeEnhancementVolumeStyle'
                },
                ti: '.EdgeEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'OpacityMapVolumeStyle'
                },
                ti: '.OpacityMapVolumeStyle'
              }, {
                en: {
                  lp: 'ProjectionVolumeStyle'
                },
                ti: '.ProjectionVolumeStyle'
              }, {
                en: {
                  lp: 'ShadedVolumeStyle'
                },
                ti: '.ShadedVolumeStyle'
              }, {
                en: {
                  lp: 'SilhouetteEnhancementVolumeStyle'
                },
                ti: '.SilhouetteEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ToneMappedVolumeStyle'
                },
                ti: '.ToneMappedVolumeStyle'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'LOD',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'forceTransitions',
            ti: 'Boolean',
            an: {
              lp: 'forceTransitions'
            },
            t: 'a'
          }, {
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'range',
            an: {
              lp: 'range'
            },
            t: 'a'
          }]
      }, {
        ln: 'MovieTexture',
        tn: null,
        bti: '.X3DSoundSourceNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'repeatS',
            ti: 'Boolean',
            an: {
              lp: 'repeatS'
            },
            t: 'a'
          }, {
            n: 'repeatT',
            ti: 'Boolean',
            an: {
              lp: 'repeatT'
            },
            t: 'a'
          }, {
            n: 'speed',
            ti: 'Float',
            an: {
              lp: 'speed'
            },
            t: 'a'
          }]
      }, {
        ln: 'LayoutLayer',
        tn: null,
        bti: '.X3DLayerNode',
        ps: [{
            n: 'rest',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'Layout'
                },
                ti: '.Layout'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'X3DRigidJointNode',
        bti: '.X3DNode',
        ps: [{
            n: 'rest',
            mno: 0,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'RigidBody'
                },
                ti: '.RigidBody'
              }],
            t: 'ers'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'forceOutput',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'forceOutput'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DSoundSourceNode',
        bti: '.X3DTimeDependentNode',
        ps: [{
            n: 'description',
            an: {
              lp: 'description'
            },
            t: 'a'
          }, {
            n: 'pitch',
            ti: 'Float',
            an: {
              lp: 'pitch'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DTexture3DNode',
        bti: '.X3DTextureNode',
        ps: [{
            n: 'textureProperties',
            rq: true,
            en: {
              lp: 'TextureProperties'
            },
            ti: '.TextureProperties'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'repeatS',
            ti: 'Boolean',
            an: {
              lp: 'repeatS'
            },
            t: 'a'
          }, {
            n: 'repeatT',
            ti: 'Boolean',
            an: {
              lp: 'repeatT'
            },
            t: 'a'
          }, {
            n: 'repeatR',
            ti: 'Boolean',
            an: {
              lp: 'repeatR'
            },
            t: 'a'
          }]
      }, {
        ln: 'SceneGraphStructureStatement'
      }, {
        ln: 'WildcardNodeType',
        bti: '.X3DNode'
      }, {
        ln: 'Cylinder',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'bottom',
            ti: 'Boolean',
            an: {
              lp: 'bottom'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Float',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'side',
            ti: 'Boolean',
            an: {
              lp: 'side'
            },
            t: 'a'
          }, {
            n: 'top',
            ti: 'Boolean',
            an: {
              lp: 'top'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'BooleanSequencer',
        tn: null,
        bti: '.X3DSequencerNode',
        ps: [{
            n: 'keyValue',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'Circle2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsSet',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'nurbsPatchSurfaceAndNurbsSweptSurfaceAndNurbsSwungSurface',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'NurbsPatchSurface'
                },
                ti: '.NurbsPatchSurface'
              }, {
                en: {
                  lp: 'NurbsSweptSurface'
                },
                ti: '.NurbsSweptSurface'
              }, {
                en: {
                  lp: 'NurbsSwungSurface'
                },
                ti: '.NurbsSwungSurface'
              }, {
                en: {
                  lp: 'NurbsTrimmedSurface'
                },
                ti: '.NurbsTrimmedSurface'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'tessellationScale',
            ti: 'Float',
            an: {
              lp: 'tessellationScale'
            },
            t: 'a'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'Color',
        tn: null,
        bti: '.X3DColorNode',
        ps: [{
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DViewportNode',
        bti: '.X3DGroupingNode'
      }, {
        ln: 'MetadataBoolean',
        tn: null,
        bti: '.X3DMetadataObject',
        ps: [{
            n: 'value',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'value'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNode',
        ps: [{
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'metadataBoolean',
            rq: true,
            en: {
              lp: 'MetadataBoolean'
            },
            ti: '.MetadataBoolean'
          }, {
            n: 'metadataDouble',
            rq: true,
            en: {
              lp: 'MetadataDouble'
            },
            ti: '.MetadataDouble'
          }, {
            n: 'metadataFloat',
            rq: true,
            en: {
              lp: 'MetadataFloat'
            },
            ti: '.MetadataFloat'
          }, {
            n: 'metadataInteger',
            rq: true,
            en: {
              lp: 'MetadataInteger'
            },
            ti: '.MetadataInteger'
          }, {
            n: 'metadataSet',
            rq: true,
            en: {
              lp: 'MetadataSet'
            },
            ti: '.MetadataSet'
          }, {
            n: 'metadataString',
            rq: true,
            en: {
              lp: 'MetadataString'
            },
            ti: '.MetadataString'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNetworkSensorNode',
        bti: '.X3DSensorNode'
      }, {
        ln: 'X3DGeometryNode',
        bti: '.X3DNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsSweptSurface',
        tn: null,
        bti: '.X3DParametricGeometryNode',
        ps: [{
            n: 'contourPolyline2DOrNurbsCurve2DOrNurbsCurve',
            mno: 0,
            mxo: 2,
            col: true,
            etis: [{
                en: {
                  lp: 'ContourPolyline2D'
                },
                ti: '.ContourPolyline2D'
              }, {
                en: {
                  lp: 'NurbsCurve2D'
                },
                ti: '.NurbsCurve2D'
              }, {
                en: {
                  lp: 'NurbsCurve'
                },
                ti: '.NurbsCurve'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'ccw',
            ti: 'Boolean',
            an: {
              lp: 'ccw'
            },
            t: 'a'
          }, {
            n: 'solid',
            ti: 'Boolean',
            an: {
              lp: 'solid'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProgramShader',
        tn: null,
        bti: '.X3DShaderNode',
        ps: [{
            n: 'shaderProgram',
            mno: 0,
            col: true,
            en: {
              lp: 'ShaderProgram'
            },
            ti: '.ShaderProgram'
          }]
      }, {
        ln: 'DirectionalLight',
        tn: null,
        bti: '.X3DLightNode',
        ps: [{
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'global',
            ti: 'Boolean',
            an: {
              lp: 'global'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DParticlePhysicsModelNode',
        bti: '.X3DNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'SphereSensor',
        tn: null,
        bti: '.X3DDragSensorNode',
        ps: [{
            n: 'offset',
            an: {
              lp: 'offset'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DChildNode',
        bti: '.X3DNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionDamper',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContourPolyline2D',
        tn: null,
        bti: '.X3DNurbsControlCurveNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'SurfaceEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'box',
            rq: true,
            en: {
              lp: 'Box'
            },
            ti: '.Box'
          }, {
            n: 'cone',
            rq: true,
            en: {
              lp: 'Cone'
            },
            ti: '.Cone'
          }, {
            n: 'cylinder',
            rq: true,
            en: {
              lp: 'Cylinder'
            },
            ti: '.Cylinder'
          }, {
            n: 'indexedFaceSet',
            rq: true,
            en: {
              lp: 'IndexedFaceSet'
            },
            ti: '.IndexedFaceSet'
          }, {
            n: 'indexedLineSet',
            rq: true,
            en: {
              lp: 'IndexedLineSet'
            },
            ti: '.IndexedLineSet'
          }, {
            n: 'indexedTriangleFanSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleFanSet'
            },
            ti: '.IndexedTriangleFanSet'
          }, {
            n: 'indexedTriangleSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleSet'
            },
            ti: '.IndexedTriangleSet'
          }, {
            n: 'indexedTriangleStripSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleStripSet'
            },
            ti: '.IndexedTriangleStripSet'
          }, {
            n: 'lineSet',
            rq: true,
            en: {
              lp: 'LineSet'
            },
            ti: '.LineSet'
          }, {
            n: 'pointSet',
            rq: true,
            en: {
              lp: 'PointSet'
            },
            ti: '.PointSet'
          }, {
            n: 'sphere',
            rq: true,
            en: {
              lp: 'Sphere'
            },
            ti: '.Sphere'
          }, {
            n: 'triangleFanSet',
            rq: true,
            en: {
              lp: 'TriangleFanSet'
            },
            ti: '.TriangleFanSet'
          }, {
            n: 'triangleSet',
            rq: true,
            en: {
              lp: 'TriangleSet'
            },
            ti: '.TriangleSet'
          }, {
            n: 'triangleStripSet',
            rq: true,
            en: {
              lp: 'TriangleStripSet'
            },
            ti: '.TriangleStripSet'
          }, {
            n: 'elevationGrid',
            rq: true,
            en: {
              lp: 'ElevationGrid'
            },
            ti: '.ElevationGrid'
          }, {
            n: 'polyline2D',
            rq: true,
            en: {
              lp: 'Polyline2D'
            },
            ti: '.Polyline2D'
          }, {
            n: 'polypoint2D',
            rq: true,
            en: {
              lp: 'Polypoint2D'
            },
            ti: '.Polypoint2D'
          }, {
            n: 'rectangle2D',
            rq: true,
            en: {
              lp: 'Rectangle2D'
            },
            ti: '.Rectangle2D'
          }, {
            n: 'triangleSet2D',
            rq: true,
            en: {
              lp: 'TriangleSet2D'
            },
            ti: '.TriangleSet2D'
          }, {
            n: 'extrusion',
            rq: true,
            en: {
              lp: 'Extrusion'
            },
            ti: '.Extrusion'
          }, {
            n: 'text',
            rq: true,
            en: {
              lp: 'Text'
            },
            ti: '.Text'
          }, {
            n: 'arc2D',
            rq: true,
            en: {
              lp: 'Arc2D'
            },
            ti: '.Arc2D'
          }, {
            n: 'arcClose2D',
            rq: true,
            en: {
              lp: 'ArcClose2D'
            },
            ti: '.ArcClose2D'
          }, {
            n: 'circle2D',
            rq: true,
            en: {
              lp: 'Circle2D'
            },
            ti: '.Circle2D'
          }, {
            n: 'disk2D',
            rq: true,
            en: {
              lp: 'Disk2D'
            },
            ti: '.Disk2D'
          }, {
            n: 'quadSet',
            rq: true,
            en: {
              lp: 'QuadSet'
            },
            ti: '.QuadSet'
          }, {
            n: 'indexedQuadSet',
            rq: true,
            en: {
              lp: 'IndexedQuadSet'
            },
            ti: '.IndexedQuadSet'
          }, {
            n: 'geoElevationGrid',
            rq: true,
            en: {
              lp: 'GeoElevationGrid'
            },
            ti: '.GeoElevationGrid'
          }, {
            n: 'nurbsCurve',
            rq: true,
            en: {
              lp: 'NurbsCurve'
            },
            ti: '.NurbsCurve'
          }, {
            n: 'nurbsPatchSurface',
            rq: true,
            en: {
              lp: 'NurbsPatchSurface'
            },
            ti: '.NurbsPatchSurface'
          }, {
            n: 'nurbsSweptSurface',
            rq: true,
            en: {
              lp: 'NurbsSweptSurface'
            },
            ti: '.NurbsSweptSurface'
          }, {
            n: 'nurbsSwungSurface',
            rq: true,
            en: {
              lp: 'NurbsSwungSurface'
            },
            ti: '.NurbsSwungSurface'
          }, {
            n: 'nurbsTrimmedSurface',
            rq: true,
            en: {
              lp: 'NurbsTrimmedSurface'
            },
            ti: '.NurbsTrimmedSurface'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }]
      }, {
        ln: 'SegmentedVolumeData',
        tn: null,
        bti: '.X3DVolumeDataNode',
        ps: [{
            n: 'composedTexture3DOrImageTexture3DOrPixelTexture3D',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'ComposedTexture3D'
                },
                ti: '.ComposedTexture3D'
              }, {
                en: {
                  lp: 'ImageTexture3D'
                },
                ti: '.ImageTexture3D'
              }, {
                en: {
                  lp: 'PixelTexture3D'
                },
                ti: '.PixelTexture3D'
              }, {
                en: {
                  lp: 'BlendedVolumeStyle'
                },
                ti: '.BlendedVolumeStyle'
              }, {
                en: {
                  lp: 'BoundaryEnhancementVolumeStyle'
                },
                ti: '.BoundaryEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'CartoonVolumeStyle'
                },
                ti: '.CartoonVolumeStyle'
              }, {
                en: {
                  lp: 'ComposedVolumeStyle'
                },
                ti: '.ComposedVolumeStyle'
              }, {
                en: {
                  lp: 'EdgeEnhancementVolumeStyle'
                },
                ti: '.EdgeEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'OpacityMapVolumeStyle'
                },
                ti: '.OpacityMapVolumeStyle'
              }, {
                en: {
                  lp: 'ProjectionVolumeStyle'
                },
                ti: '.ProjectionVolumeStyle'
              }, {
                en: {
                  lp: 'ShadedVolumeStyle'
                },
                ti: '.ShadedVolumeStyle'
              }, {
                en: {
                  lp: 'SilhouetteEnhancementVolumeStyle'
                },
                ti: '.SilhouetteEnhancementVolumeStyle'
              }, {
                en: {
                  lp: 'ToneMappedVolumeStyle'
                },
                ti: '.ToneMappedVolumeStyle'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'segmentEnabled',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'segmentEnabled'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsCurve2D',
        tn: null,
        bti: '.X3DNurbsControlCurveNode',
        ps: [{
            n: 'closed',
            ti: 'Boolean',
            an: {
              lp: 'closed'
            },
            t: 'a'
          }, {
            n: 'knot',
            an: {
              lp: 'knot'
            },
            t: 'a'
          }, {
            n: 'order',
            ti: 'Integer',
            an: {
              lp: 'order'
            },
            t: 'a'
          }, {
            n: 'tessellation',
            ti: 'Integer',
            an: {
              lp: 'tessellation'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'Component',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'level',
            rq: true,
            ti: 'Int',
            an: {
              lp: 'level'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollidableOffset',
        tn: null,
        bti: '.X3DNBodyCollidableNode',
        ps: [{
            n: 'collidableOffset',
            rq: true,
            en: {
              lp: 'CollidableOffset'
            },
            ti: '.CollidableOffset'
          }, {
            n: 'collidableShape',
            rq: true,
            en: {
              lp: 'CollidableShape'
            },
            ti: '.CollidableShape'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'LinePickSensor',
        tn: null,
        bti: '.X3DPickSensorNode',
        ps: [{
            n: 'lineSet',
            rq: true,
            en: {
              lp: 'LineSet'
            },
            ti: '.LineSet'
          }, {
            n: 'indexedLineSet',
            rq: true,
            en: {
              lp: 'IndexedLineSet'
            },
            ti: '.IndexedLineSet'
          }, {
            n: 'anchorOrBillboardOrCollision',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'LayoutGroup'
                },
                ti: '.LayoutGroup'
              }, {
                en: {
                  lp: 'ScreenGroup'
                },
                ti: '.ScreenGroup'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ColorRGBA',
        tn: null,
        bti: '.X3DColorNode',
        ps: [{
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }]
      }, {
        ln: 'ComposedShader',
        tn: null,
        ps: [{
            n: 'field',
            mno: 0,
            col: true,
            en: {
              lp: 'field'
            },
            ti: '.Field'
          }, {
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'metadataBoolean',
            rq: true,
            en: {
              lp: 'MetadataBoolean'
            },
            ti: '.MetadataBoolean'
          }, {
            n: 'metadataDouble',
            rq: true,
            en: {
              lp: 'MetadataDouble'
            },
            ti: '.MetadataDouble'
          }, {
            n: 'metadataFloat',
            rq: true,
            en: {
              lp: 'MetadataFloat'
            },
            ti: '.MetadataFloat'
          }, {
            n: 'metadataInteger',
            rq: true,
            en: {
              lp: 'MetadataInteger'
            },
            ti: '.MetadataInteger'
          }, {
            n: 'metadataSet',
            rq: true,
            en: {
              lp: 'MetadataSet'
            },
            ti: '.MetadataSet'
          }, {
            n: 'metadataString',
            rq: true,
            en: {
              lp: 'MetadataString'
            },
            ti: '.MetadataString'
          }, {
            n: 'shaderPartOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'ShaderPart'
                },
                ti: '.ShaderPart'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'language',
            an: {
              lp: 'language'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DNBodyCollisionSpaceNode',
        bti: '.X3DNode',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }, {
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundaryEnhancementVolumeStyle',
        tn: null,
        bti: '.X3DComposableVolumeRenderStyleNode',
        ps: [{
            n: 'boundaryOpacity',
            ti: 'Float',
            an: {
              lp: 'boundaryOpacity'
            },
            t: 'a'
          }, {
            n: 'opacityFactor',
            ti: 'Float',
            an: {
              lp: 'opacityFactor'
            },
            t: 'a'
          }, {
            n: 'retainedOpacity',
            ti: 'Float',
            an: {
              lp: 'retainedOpacity'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DUrlObject',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'TriangleStripSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'stripCount',
            an: {
              lp: 'stripCount'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DLayerNode',
        bti: '.X3DNode',
        ps: [{
            n: 'isPickable',
            ti: 'Boolean',
            an: {
              lp: 'isPickable'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionChaser2D',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'CADLayer',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'visible',
            ti: {
              t: 'l',
              bti: 'Boolean'
            },
            an: {
              lp: 'visible'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DBoundedObject',
        ps: [{
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExternProtoDeclare',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'field',
            mno: 0,
            col: true,
            en: {
              lp: 'field'
            },
            ti: '.Field'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'url',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'appinfo',
            an: {
              lp: 'appinfo'
            },
            t: 'a'
          }, {
            n: 'documentation',
            an: {
              lp: 'documentation'
            },
            t: 'a'
          }]
      }, {
        ln: 'CollisionSensor',
        tn: null,
        bti: '.X3DSensorNode',
        ps: [{
            n: 'collisionCollection',
            rq: true,
            en: {
              lp: 'CollisionCollection'
            },
            ti: '.CollisionCollection'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'Transform',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'center',
            an: {
              lp: 'center'
            },
            t: 'a'
          }, {
            n: 'rotation',
            an: {
              lp: 'rotation'
            },
            t: 'a'
          }, {
            n: 'scale',
            an: {
              lp: 'scale'
            },
            t: 'a'
          }, {
            n: 'scaleOrientation',
            an: {
              lp: 'scaleOrientation'
            },
            t: 'a'
          }, {
            n: 'translation',
            an: {
              lp: 'translation'
            },
            t: 'a'
          }]
      }, {
        ln: 'Billboard',
        tn: null,
        bti: '.X3DGroupingNode',
        ps: [{
            n: 'axisOfRotation',
            an: {
              lp: 'axisOfRotation'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextureBackground',
        tn: null,
        bti: '.X3DBackgroundNode',
        ps: [{
            n: 'textureBackgroundChildContentModel',
            mno: 0,
            mxo: 6,
            col: true,
            etis: [{
                en: {
                  lp: 'ImageTexture'
                },
                ti: '.ImageTexture'
              }, {
                en: {
                  lp: 'MovieTexture'
                },
                ti: '.MovieTexture'
              }, {
                en: {
                  lp: 'MultiTexture'
                },
                ti: '.MultiTexture'
              }, {
                en: {
                  lp: 'PixelTexture'
                },
                ti: '.PixelTexture'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'X3DNormalNode',
        bti: '.X3DGeometricPropertyNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataSet',
        tn: null,
        ps: [{
            n: 'is',
            en: {
              lp: 'IS'
            },
            ti: '.IS'
          }, {
            n: 'childContentModelCore',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'MetadataBoolean'
                },
                ti: '.MetadataBoolean'
              }, {
                en: {
                  lp: 'MetadataDouble'
                },
                ti: '.MetadataDouble'
              }, {
                en: {
                  lp: 'MetadataFloat'
                },
                ti: '.MetadataFloat'
              }, {
                en: {
                  lp: 'MetadataInteger'
                },
                ti: '.MetadataInteger'
              }, {
                en: {
                  lp: 'MetadataSet'
                },
                ti: '.MetadataSet'
              }, {
                en: {
                  lp: 'MetadataString'
                },
                ti: '.MetadataString'
              }],
            t: 'es'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'reference',
            an: {
              lp: 'reference'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'def',
            ti: 'ID',
            an: {
              lp: 'DEF'
            },
            t: 'a'
          }, {
            n: 'use',
            ti: 'IDREF',
            an: {
              lp: 'USE'
            },
            t: 'a'
          }, {
            n: 'clazz',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'class'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DTimeDependentNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'loop',
            ti: 'Boolean',
            an: {
              lp: 'loop'
            },
            t: 'a'
          }, {
            n: 'pauseTime',
            ti: 'Double',
            an: {
              lp: 'pauseTime'
            },
            t: 'a'
          }, {
            n: 'resumeTime',
            ti: 'Double',
            an: {
              lp: 'resumeTime'
            },
            t: 'a'
          }, {
            n: 'startTime',
            ti: 'Double',
            an: {
              lp: 'startTime'
            },
            t: 'a'
          }, {
            n: 'stopTime',
            ti: 'Double',
            an: {
              lp: 'stopTime'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DSoundNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'audioClip',
            rq: true,
            en: {
              lp: 'AudioClip'
            },
            ti: '.AudioClip'
          }, {
            n: 'movieTexture',
            rq: true,
            en: {
              lp: 'MovieTexture'
            },
            ti: '.MovieTexture'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }]
      }, {
        ln: 'SpotLight',
        tn: null,
        bti: '.X3DLightNode',
        ps: [{
            n: 'attenuation',
            an: {
              lp: 'attenuation'
            },
            t: 'a'
          }, {
            n: 'beamWidth',
            ti: 'Float',
            an: {
              lp: 'beamWidth'
            },
            t: 'a'
          }, {
            n: 'cutOffAngle',
            ti: 'Float',
            an: {
              lp: 'cutOffAngle'
            },
            t: 'a'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'location',
            an: {
              lp: 'location'
            },
            t: 'a'
          }, {
            n: 'radius',
            ti: 'Float',
            an: {
              lp: 'radius'
            },
            t: 'a'
          }, {
            n: 'global',
            ti: 'Boolean',
            an: {
              lp: 'global'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeTrigger',
        tn: null,
        bti: '.X3DTriggerNode'
      }, {
        ln: 'CollisionSpace',
        tn: null,
        bti: '.X3DNBodyCollisionSpaceNode',
        ps: [{
            n: 'collidableOffsetOrCollidableShapeOrCollisionSpace',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'CollidableOffset'
                },
                ti: '.CollidableOffset'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSpace'
                },
                ti: '.CollisionSpace'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }, {
            n: 'useGeometry',
            ti: 'Boolean',
            an: {
              lp: 'useGeometry'
            },
            t: 'a'
          }]
      }, {
        ln: 'IMPORT',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'inlineDEF',
            rq: true,
            ti: 'IDREF',
            an: {
              lp: 'inlineDEF'
            },
            t: 'a'
          }, {
            n: 'importedDEF',
            rq: true,
            an: {
              lp: 'importedDEF'
            },
            t: 'a'
          }, {
            n: 'as',
            ti: 'ID',
            an: {
              lp: 'AS'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DInterpolatorNode',
        bti: '.X3DChildNode',
        ps: [{
            n: 'key',
            an: {
              lp: 'key'
            },
            t: 'a'
          }]
      }, {
        ln: 'FillProperties',
        tn: null,
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'filled',
            ti: 'Boolean',
            an: {
              lp: 'filled'
            },
            t: 'a'
          }, {
            n: 'hatched',
            ti: 'Boolean',
            an: {
              lp: 'hatched'
            },
            t: 'a'
          }, {
            n: 'hatchStyle',
            ti: 'Integer',
            an: {
              lp: 'hatchStyle'
            },
            t: 'a'
          }, {
            n: 'hatchColor',
            an: {
              lp: 'hatchColor'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'PackagedShader',
        tn: null,
        bti: '.X3DShaderNode',
        ps: [{
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DEnvironmentTextureNode',
        bti: '.X3DAppearanceChildNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DPickableObject',
        ps: [{
            n: 'objectType',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'objectType'
            },
            t: 'a'
          }, {
            n: 'pickable',
            ti: 'Boolean',
            an: {
              lp: 'pickable'
            },
            t: 'a'
          }]
      }, {
        ln: 'VolumeEmitter',
        tn: null,
        bti: '.X3DParticleEmitterNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'coordIndex',
            an: {
              lp: 'coordIndex'
            },
            t: 'a'
          }, {
            n: 'direction',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }, {
            n: 'internal',
            ti: 'Boolean',
            an: {
              lp: 'internal'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DDragSensorNode',
        bti: '.X3DPointingDeviceSensorNode',
        ps: [{
            n: 'autoOffset',
            ti: 'Boolean',
            an: {
              lp: 'autoOffset'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiTextureCoordinate',
        tn: null,
        bti: '.X3DTextureCoordinateNode',
        ps: [{
            n: 'textureCoordinateOrTextureCoordinateGeneratorOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'TextureCoordinate'
                },
                ti: '.TextureCoordinate'
              }, {
                en: {
                  lp: 'TextureCoordinateGenerator'
                },
                ti: '.TextureCoordinateGenerator'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'Connect',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'nodeField',
            rq: true,
            an: {
              lp: 'nodeField'
            },
            t: 'a'
          }, {
            n: 'protoField',
            rq: true,
            an: {
              lp: 'protoField'
            },
            t: 'a'
          }]
      }, {
        ln: 'IS',
        tn: null,
        bti: '.SceneGraphStructureStatement',
        ps: [{
            n: 'connect',
            rq: true,
            col: true,
            en: {
              lp: 'connect'
            },
            ti: '.Connect'
          }]
      }, {
        ln: 'MultiTextureTransform',
        tn: null,
        bti: '.X3DTextureTransformNode',
        ps: [{
            n: 'textureTransformOrProtoInstance',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'TextureTransform'
                },
                ti: '.TextureTransform'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'GeoOrigin',
        tn: null,
        bti: '.X3DNode',
        ps: [{
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'geoCoords',
            an: {
              lp: 'geoCoords'
            },
            t: 'a'
          }, {
            n: 'rotateYUp',
            ti: 'Boolean',
            an: {
              lp: 'rotateYUp'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ScalarChaser',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            ti: 'Float',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            ti: 'Float',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DColorNode',
        bti: '.X3DGeometricPropertyNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'LocalFog',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'enabled',
            ti: 'Boolean',
            an: {
              lp: 'enabled'
            },
            t: 'a'
          }, {
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'fogType',
            an: {
              lp: 'fogType'
            },
            t: 'a'
          }, {
            n: 'visibilityRange',
            ti: 'Float',
            an: {
              lp: 'visibilityRange'
            },
            t: 'a'
          }]
      }, {
        ln: 'PositionDamper2D',
        tn: null,
        bti: '.X3DDamperNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'Coordinate',
        tn: null,
        bti: '.X3DCoordinateNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }, {
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'ShaderPart',
        tn: null,
        bti: '.X3DNodeMixedContent',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }, {
            n: 'url',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'url'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'EaseInEaseOut',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'easeInEaseOut',
            an: {
              lp: 'easeInEaseOut'
            },
            t: 'a'
          }, {
            n: 'key',
            an: {
              lp: 'key'
            },
            t: 'a'
          }]
      }, {
        ln: 'StaticGroup',
        tn: null,
        bti: '.X3DChildNode',
        ps: [{
            n: 'backgroundOrColorInterpolatorOrCoordinateInterpolator',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Background'
                },
                ti: '.Background'
              }, {
                en: {
                  lp: 'ColorInterpolator'
                },
                ti: '.ColorInterpolator'
              }, {
                en: {
                  lp: 'CoordinateInterpolator'
                },
                ti: '.CoordinateInterpolator'
              }, {
                en: {
                  lp: 'DirectionalLight'
                },
                ti: '.DirectionalLight'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'NavigationInfo'
                },
                ti: '.NavigationInfo'
              }, {
                en: {
                  lp: 'NormalInterpolator'
                },
                ti: '.NormalInterpolator'
              }, {
                en: {
                  lp: 'OrientationInterpolator'
                },
                ti: '.OrientationInterpolator'
              }, {
                en: {
                  lp: 'PositionInterpolator'
                },
                ti: '.PositionInterpolator'
              }, {
                en: {
                  lp: 'ScalarInterpolator'
                },
                ti: '.ScalarInterpolator'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'TimeSensor'
                },
                ti: '.TimeSensor'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'Viewpoint'
                },
                ti: '.Viewpoint'
              }, {
                en: {
                  lp: 'WorldInfo'
                },
                ti: '.WorldInfo'
              }, {
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'BooleanFilter'
                },
                ti: '.BooleanFilter'
              }, {
                en: {
                  lp: 'BooleanSequencer'
                },
                ti: '.BooleanSequencer'
              }, {
                en: {
                  lp: 'BooleanToggle'
                },
                ti: '.BooleanToggle'
              }, {
                en: {
                  lp: 'BooleanTrigger'
                },
                ti: '.BooleanTrigger'
              }, {
                en: {
                  lp: 'CylinderSensor'
                },
                ti: '.CylinderSensor'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'IntegerSequencer'
                },
                ti: '.IntegerSequencer'
              }, {
                en: {
                  lp: 'IntegerTrigger'
                },
                ti: '.IntegerTrigger'
              }, {
                en: {
                  lp: 'KeySensor'
                },
                ti: '.KeySensor'
              }, {
                en: {
                  lp: 'PlaneSensor'
                },
                ti: '.PlaneSensor'
              }, {
                en: {
                  lp: 'PointLight'
                },
                ti: '.PointLight'
              }, {
                en: {
                  lp: 'ProximitySensor'
                },
                ti: '.ProximitySensor'
              }, {
                en: {
                  lp: 'SphereSensor'
                },
                ti: '.SphereSensor'
              }, {
                en: {
                  lp: 'SpotLight'
                },
                ti: '.SpotLight'
              }, {
                en: {
                  lp: 'StringSensor'
                },
                ti: '.StringSensor'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'TimeTrigger'
                },
                ti: '.TimeTrigger'
              }, {
                en: {
                  lp: 'TouchSensor'
                },
                ti: '.TouchSensor'
              }, {
                en: {
                  lp: 'AudioClip'
                },
                ti: '.AudioClip'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Fog'
                },
                ti: '.Fog'
              }, {
                en: {
                  lp: 'LoadSensor'
                },
                ti: '.LoadSensor'
              }, {
                en: {
                  lp: 'LocalFog'
                },
                ti: '.LocalFog'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'Script'
                },
                ti: '.Script'
              }, {
                en: {
                  lp: 'Sound'
                },
                ti: '.Sound'
              }, {
                en: {
                  lp: 'VisibilitySensor'
                },
                ti: '.VisibilitySensor'
              }, {
                en: {
                  lp: 'CoordinateInterpolator2D'
                },
                ti: '.CoordinateInterpolator2D'
              }, {
                en: {
                  lp: 'PositionInterpolator2D'
                },
                ti: '.PositionInterpolator2D'
              }, {
                en: {
                  lp: 'ClipPlane'
                },
                ti: '.ClipPlane'
              }, {
                en: {
                  lp: 'EaseInEaseOut'
                },
                ti: '.EaseInEaseOut'
              }, {
                en: {
                  lp: 'LinePickSensor'
                },
                ti: '.LinePickSensor'
              }, {
                en: {
                  lp: 'PickableGroup'
                },
                ti: '.PickableGroup'
              }, {
                en: {
                  lp: 'PointPickSensor'
                },
                ti: '.PointPickSensor'
              }, {
                en: {
                  lp: 'PrimitivePickSensor'
                },
                ti: '.PrimitivePickSensor'
              }, {
                en: {
                  lp: 'VolumePickSensor'
                },
                ti: '.VolumePickSensor'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator'
                },
                ti: '.SplinePositionInterpolator'
              }, {
                en: {
                  lp: 'SplinePositionInterpolator2D'
                },
                ti: '.SplinePositionInterpolator2D'
              }, {
                en: {
                  lp: 'SplineScalarInterpolator'
                },
                ti: '.SplineScalarInterpolator'
              }, {
                en: {
                  lp: 'SquadOrientationInterpolator'
                },
                ti: '.SquadOrientationInterpolator'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'OrthoViewpoint'
                },
                ti: '.OrthoViewpoint'
              }, {
                en: {
                  lp: 'ViewpointGroup'
                },
                ti: '.ViewpointGroup'
              }, {
                en: {
                  lp: 'ColorChaser'
                },
                ti: '.ColorChaser'
              }, {
                en: {
                  lp: 'ColorDamper'
                },
                ti: '.ColorDamper'
              }, {
                en: {
                  lp: 'CoordinateChaser'
                },
                ti: '.CoordinateChaser'
              }, {
                en: {
                  lp: 'CoordinateDamper'
                },
                ti: '.CoordinateDamper'
              }, {
                en: {
                  lp: 'OrientationChaser'
                },
                ti: '.OrientationChaser'
              }, {
                en: {
                  lp: 'OrientationDamper'
                },
                ti: '.OrientationDamper'
              }, {
                en: {
                  lp: 'PositionChaser'
                },
                ti: '.PositionChaser'
              }, {
                en: {
                  lp: 'PositionChaser2D'
                },
                ti: '.PositionChaser2D'
              }, {
                en: {
                  lp: 'PositionDamper'
                },
                ti: '.PositionDamper'
              }, {
                en: {
                  lp: 'PositionDamper2D'
                },
                ti: '.PositionDamper2D'
              }, {
                en: {
                  lp: 'ScalarChaser'
                },
                ti: '.ScalarChaser'
              }, {
                en: {
                  lp: 'ScalarDamper'
                },
                ti: '.ScalarDamper'
              }, {
                en: {
                  lp: 'TexCoordChaser2D'
                },
                ti: '.TexCoordChaser2D'
              }, {
                en: {
                  lp: 'TexCoordDamper2D'
                },
                ti: '.TexCoordDamper2D'
              }, {
                en: {
                  lp: 'TextureBackground'
                },
                ti: '.TextureBackground'
              }, {
                en: {
                  lp: 'CollidableShape'
                },
                ti: '.CollidableShape'
              }, {
                en: {
                  lp: 'CollisionSensor'
                },
                ti: '.CollisionSensor'
              }, {
                en: {
                  lp: 'RigidBodyCollection'
                },
                ti: '.RigidBodyCollection'
              }, {
                en: {
                  lp: 'LayerSet'
                },
                ti: '.LayerSet'
              }, {
                en: {
                  lp: 'ParticleSystem'
                },
                ti: '.ParticleSystem'
              }, {
                en: {
                  lp: 'TransformSensor'
                },
                ti: '.TransformSensor'
              }, {
                en: {
                  lp: 'IsoSurfaceVolumeData'
                },
                ti: '.IsoSurfaceVolumeData'
              }, {
                en: {
                  lp: 'SegmentedVolumeData'
                },
                ti: '.SegmentedVolumeData'
              }, {
                en: {
                  lp: 'VolumeData'
                },
                ti: '.VolumeData'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'DISEntityManager'
                },
                ti: '.DISEntityManager'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoMetadata'
                },
                ti: '.GeoMetadata'
              }, {
                en: {
                  lp: 'GeoOrigin'
                },
                ti: '.GeoOrigin'
              }, {
                en: {
                  lp: 'GeoPositionInterpolator'
                },
                ti: '.GeoPositionInterpolator'
              }, {
                en: {
                  lp: 'GeoProximitySensor'
                },
                ti: '.GeoProximitySensor'
              }, {
                en: {
                  lp: 'GeoTouchSensor'
                },
                ti: '.GeoTouchSensor'
              }, {
                en: {
                  lp: 'GeoViewpoint'
                },
                ti: '.GeoViewpoint'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimHumanoid'
                },
                ti: '.HAnimHumanoid'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'HAnimSegment'
                },
                ti: '.HAnimSegment'
              }, {
                en: {
                  lp: 'HAnimSite'
                },
                ti: '.HAnimSite'
              }, {
                en: {
                  lp: 'NurbsOrientationInterpolator'
                },
                ti: '.NurbsOrientationInterpolator'
              }, {
                en: {
                  lp: 'NurbsPositionInterpolator'
                },
                ti: '.NurbsPositionInterpolator'
              }, {
                en: {
                  lp: 'NurbsSurfaceInterpolator'
                },
                ti: '.NurbsSurfaceInterpolator'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }, {
                en: {
                  lp: 'ROUTE'
                },
                ti: '.ROUTE'
              }, {
                en: {
                  lp: 'ExternProtoDeclare'
                },
                ti: '.ExternProtoDeclare'
              }, {
                en: {
                  lp: 'ProtoDeclare'
                },
                ti: '.ProtoDeclare'
              }, {
                en: {
                  lp: 'IMPORT'
                },
                ti: '.IMPORT'
              }, {
                en: {
                  lp: 'EXPORT'
                },
                ti: '.EXPORT'
              }],
            t: 'es'
          }, {
            n: 'bboxCenter',
            an: {
              lp: 'bboxCenter'
            },
            t: 'a'
          }, {
            n: 'bboxSize',
            an: {
              lp: 'bboxSize'
            },
            t: 'a'
          }]
      }, {
        ln: 'VolumePickSensor',
        tn: null,
        bti: '.X3DPickSensorNode',
        ps: [{
            n: 'box',
            rq: true,
            en: {
              lp: 'Box'
            },
            ti: '.Box'
          }, {
            n: 'cone',
            rq: true,
            en: {
              lp: 'Cone'
            },
            ti: '.Cone'
          }, {
            n: 'cylinder',
            rq: true,
            en: {
              lp: 'Cylinder'
            },
            ti: '.Cylinder'
          }, {
            n: 'indexedFaceSet',
            rq: true,
            en: {
              lp: 'IndexedFaceSet'
            },
            ti: '.IndexedFaceSet'
          }, {
            n: 'indexedLineSet',
            rq: true,
            en: {
              lp: 'IndexedLineSet'
            },
            ti: '.IndexedLineSet'
          }, {
            n: 'indexedTriangleFanSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleFanSet'
            },
            ti: '.IndexedTriangleFanSet'
          }, {
            n: 'indexedTriangleSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleSet'
            },
            ti: '.IndexedTriangleSet'
          }, {
            n: 'indexedTriangleStripSet',
            rq: true,
            en: {
              lp: 'IndexedTriangleStripSet'
            },
            ti: '.IndexedTriangleStripSet'
          }, {
            n: 'lineSet',
            rq: true,
            en: {
              lp: 'LineSet'
            },
            ti: '.LineSet'
          }, {
            n: 'pointSet',
            rq: true,
            en: {
              lp: 'PointSet'
            },
            ti: '.PointSet'
          }, {
            n: 'sphere',
            rq: true,
            en: {
              lp: 'Sphere'
            },
            ti: '.Sphere'
          }, {
            n: 'triangleFanSet',
            rq: true,
            en: {
              lp: 'TriangleFanSet'
            },
            ti: '.TriangleFanSet'
          }, {
            n: 'triangleSet',
            rq: true,
            en: {
              lp: 'TriangleSet'
            },
            ti: '.TriangleSet'
          }, {
            n: 'triangleStripSet',
            rq: true,
            en: {
              lp: 'TriangleStripSet'
            },
            ti: '.TriangleStripSet'
          }, {
            n: 'elevationGrid',
            rq: true,
            en: {
              lp: 'ElevationGrid'
            },
            ti: '.ElevationGrid'
          }, {
            n: 'polyline2D',
            rq: true,
            en: {
              lp: 'Polyline2D'
            },
            ti: '.Polyline2D'
          }, {
            n: 'polypoint2D',
            rq: true,
            en: {
              lp: 'Polypoint2D'
            },
            ti: '.Polypoint2D'
          }, {
            n: 'rectangle2D',
            rq: true,
            en: {
              lp: 'Rectangle2D'
            },
            ti: '.Rectangle2D'
          }, {
            n: 'triangleSet2D',
            rq: true,
            en: {
              lp: 'TriangleSet2D'
            },
            ti: '.TriangleSet2D'
          }, {
            n: 'extrusion',
            rq: true,
            en: {
              lp: 'Extrusion'
            },
            ti: '.Extrusion'
          }, {
            n: 'text',
            rq: true,
            en: {
              lp: 'Text'
            },
            ti: '.Text'
          }, {
            n: 'arc2D',
            rq: true,
            en: {
              lp: 'Arc2D'
            },
            ti: '.Arc2D'
          }, {
            n: 'arcClose2D',
            rq: true,
            en: {
              lp: 'ArcClose2D'
            },
            ti: '.ArcClose2D'
          }, {
            n: 'circle2D',
            rq: true,
            en: {
              lp: 'Circle2D'
            },
            ti: '.Circle2D'
          }, {
            n: 'disk2D',
            rq: true,
            en: {
              lp: 'Disk2D'
            },
            ti: '.Disk2D'
          }, {
            n: 'quadSet',
            rq: true,
            en: {
              lp: 'QuadSet'
            },
            ti: '.QuadSet'
          }, {
            n: 'indexedQuadSet',
            rq: true,
            en: {
              lp: 'IndexedQuadSet'
            },
            ti: '.IndexedQuadSet'
          }, {
            n: 'geoElevationGrid',
            rq: true,
            en: {
              lp: 'GeoElevationGrid'
            },
            ti: '.GeoElevationGrid'
          }, {
            n: 'nurbsCurve',
            rq: true,
            en: {
              lp: 'NurbsCurve'
            },
            ti: '.NurbsCurve'
          }, {
            n: 'nurbsPatchSurface',
            rq: true,
            en: {
              lp: 'NurbsPatchSurface'
            },
            ti: '.NurbsPatchSurface'
          }, {
            n: 'nurbsSweptSurface',
            rq: true,
            en: {
              lp: 'NurbsSweptSurface'
            },
            ti: '.NurbsSweptSurface'
          }, {
            n: 'nurbsSwungSurface',
            rq: true,
            en: {
              lp: 'NurbsSwungSurface'
            },
            ti: '.NurbsSwungSurface'
          }, {
            n: 'nurbsTrimmedSurface',
            rq: true,
            en: {
              lp: 'NurbsTrimmedSurface'
            },
            ti: '.NurbsTrimmedSurface'
          }, {
            n: 'anchorOrBillboardOrCollision',
            mno: 0,
            col: true,
            etis: [{
                en: {
                  lp: 'Anchor'
                },
                ti: '.Anchor'
              }, {
                en: {
                  lp: 'Billboard'
                },
                ti: '.Billboard'
              }, {
                en: {
                  lp: 'Collision'
                },
                ti: '.Collision'
              }, {
                en: {
                  lp: 'Group'
                },
                ti: '.Group'
              }, {
                en: {
                  lp: 'Inline'
                },
                ti: '.Inline'
              }, {
                en: {
                  lp: 'LOD'
                },
                ti: '.LOD'
              }, {
                en: {
                  lp: 'StaticGroup'
                },
                ti: '.StaticGroup'
              }, {
                en: {
                  lp: 'Switch'
                },
                ti: '.Switch'
              }, {
                en: {
                  lp: 'Transform'
                },
                ti: '.Transform'
              }, {
                en: {
                  lp: 'EspduTransform'
                },
                ti: '.EspduTransform'
              }, {
                en: {
                  lp: 'ReceiverPdu'
                },
                ti: '.ReceiverPdu'
              }, {
                en: {
                  lp: 'SignalPdu'
                },
                ti: '.SignalPdu'
              }, {
                en: {
                  lp: 'TransmitterPdu'
                },
                ti: '.TransmitterPdu'
              }, {
                en: {
                  lp: 'GeoLocation'
                },
                ti: '.GeoLocation'
              }, {
                en: {
                  lp: 'GeoLOD'
                },
                ti: '.GeoLOD'
              }, {
                en: {
                  lp: 'GeoTransform'
                },
                ti: '.GeoTransform'
              }, {
                en: {
                  lp: 'HAnimJoint'
                },
                ti: '.HAnimJoint'
              }, {
                en: {
                  lp: 'NurbsSet'
                },
                ti: '.NurbsSet'
              }, {
                en: {
                  lp: 'CADAssembly'
                },
                ti: '.CADAssembly'
              }, {
                en: {
                  lp: 'CADLayer'
                },
                ti: '.CADLayer'
              }, {
                en: {
                  lp: 'CADPart'
                },
                ti: '.CADPart'
              }, {
                en: {
                  lp: 'Viewport'
                },
                ti: '.Viewport'
              }, {
                en: {
                  lp: 'LayoutGroup'
                },
                ti: '.LayoutGroup'
              }, {
                en: {
                  lp: 'ScreenGroup'
                },
                ti: '.ScreenGroup'
              }, {
                en: {
                  lp: 'Shape'
                },
                ti: '.Shape'
              }, {
                en: {
                  lp: 'ProtoInstance'
                },
                ti: '.ProtoInstance'
              }],
            t: 'es'
          }]
      }, {
        ln: 'X3DTextureCoordinateNode',
        bti: '.X3DGeometricPropertyNode',
        ps: [{
            n: 'containerField',
            an: {
              lp: 'containerField'
            },
            t: 'a'
          }]
      }, {
        ln: 'OrientationChaser',
        tn: null,
        bti: '.X3DChaserNode',
        ps: [{
            n: 'initialDestination',
            an: {
              lp: 'initialDestination'
            },
            t: 'a'
          }, {
            n: 'initialValue',
            an: {
              lp: 'initialValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'Fog',
        tn: null,
        bti: '.X3DBindableNode',
        ps: [{
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'fogType',
            an: {
              lp: 'fogType'
            },
            t: 'a'
          }, {
            n: 'visibilityRange',
            ti: 'Float',
            an: {
              lp: 'visibilityRange'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeoPositionInterpolator',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'geoOrigin',
            rq: true,
            en: {
              lp: 'GeoOrigin'
            },
            ti: '.GeoOrigin'
          }, {
            n: 'geoSystem',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'geoSystem'
            },
            t: 'a'
          }, {
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'IndexedQuadSet',
        tn: null,
        bti: '.X3DComposedGeometryNode',
        ps: [{
            n: 'index',
            an: {
              lp: 'index'
            },
            t: 'a'
          }]
      }, {
        ln: 'NurbsCurve',
        tn: null,
        bti: '.X3DParametricGeometryNode',
        ps: [{
            n: 'coordinate',
            rq: true,
            en: {
              lp: 'Coordinate'
            },
            ti: '.Coordinate'
          }, {
            n: 'coordinateDouble',
            rq: true,
            en: {
              lp: 'CoordinateDouble'
            },
            ti: '.CoordinateDouble'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'closed',
            ti: 'Boolean',
            an: {
              lp: 'closed'
            },
            t: 'a'
          }, {
            n: 'knot',
            an: {
              lp: 'knot'
            },
            t: 'a'
          }, {
            n: 'order',
            ti: 'Integer',
            an: {
              lp: 'order'
            },
            t: 'a'
          }, {
            n: 'tessellation',
            ti: 'Integer',
            an: {
              lp: 'tessellation'
            },
            t: 'a'
          }, {
            n: 'weight',
            an: {
              lp: 'weight'
            },
            t: 'a'
          }]
      }, {
        ln: 'X3DFollowerNode',
        bti: '.X3DChildNode'
      }, {
        ln: 'X3DLayoutNode',
        bti: '.X3DChildNode'
      }, {
        ln: 'ProximitySensor',
        tn: null,
        bti: '.X3DEnvironmentalSensorNode'
      }, {
        ln: 'X3DTexture2DNode',
        bti: '.X3DTextureNode',
        ps: [{
            n: 'textureProperties',
            rq: true,
            en: {
              lp: 'TextureProperties'
            },
            ti: '.TextureProperties'
          }, {
            n: 'protoInstance',
            rq: true,
            en: {
              lp: 'ProtoInstance'
            },
            ti: '.ProtoInstance'
          }, {
            n: 'repeatS',
            ti: 'Boolean',
            an: {
              lp: 'repeatS'
            },
            t: 'a'
          }, {
            n: 'repeatT',
            ti: 'Boolean',
            an: {
              lp: 'repeatT'
            },
            t: 'a'
          }]
      }, {
        ln: 'SplinePositionInterpolator2D',
        tn: null,
        bti: '.X3DInterpolatorNode',
        ps: [{
            n: 'closed',
            ti: 'Boolean',
            an: {
              lp: 'closed'
            },
            t: 'a'
          }, {
            n: 'keyValue',
            an: {
              lp: 'keyValue'
            },
            t: 'a'
          }, {
            n: 'keyVelocity',
            an: {
              lp: 'keyVelocity'
            },
            t: 'a'
          }, {
            n: 'normalizeVelocity',
            ti: 'Boolean',
            an: {
              lp: 'normalizeVelocity'
            },
            t: 'a'
          }]
      }, {
        ln: 'Polypoint2D',
        tn: null,
        bti: '.X3DGeometryNode',
        ps: [{
            n: 'point',
            an: {
              lp: 'point'
            },
            t: 'a'
          }]
      }, {
        ln: 'TriangleSet',
        tn: null,
        bti: '.X3DComposedGeometryNode'
      }, {
        t: 'enum',
        ln: 'FogTypeValues',
        vs: ['LINEAR', 'EXPONENTIAL']
      }, {
        t: 'enum',
        ln: 'OutputOnlyAccessTypes',
        vs: ['actionKeyPress', 'actionKeyRelease', 'altKey', 'angle', 'angleRate', 'articulationParameterValue0_changed', 'articulationParameterValue1_changed', 'articulationParameterValue2_changed', 'articulationParameterValue3_changed', 'articulationParameterValue4_changed', 'articulationParameterValue5_changed', 'articulationParameterValue6_changed', 'articulationParameterValue7_changed', 'bindTime', 'body1AnchorPoint', 'body1Axis', 'body2AnchorPoint', 'body2Axis', 'centerOfRotation_changed', 'collideTime', 'controlKey', 'cycleTime', 'detonateTime', 'duration_changed', 'elapsedTime', 'enteredText', 'enterTime', 'exitTime', 'finalText', 'firedTime', 'fraction_changed', 'geovalue_changed', 'hinge1Angle', 'hinge1AngleRate', 'hinge2Angle', 'hinge2AngleRate', 'hitGeoCoord_changed', 'hitNormal_changed', 'hitPoint_changed', 'hitTexCoord_changed', 'inputFalse', 'inputNegate', 'inputTrue', 'isActive', 'isBound', 'isCollided', 'isDetonated', 'isLoaded', 'isOver', 'isPaused', 'isNetworkReader', 'isNetworkWriter', 'isRtpHeaderHeard', 'isSelected', 'isStandAlone', 'isValid', 'keyPress', 'keyRelease', 'level_changed', 'lineBounds', 'loadTime', 'modifiedFraction_changed', 'motor1Angle', 'motor1AngleRate', 'motor2Angle', 'motor2AngleRate', 'motor3Angle', 'motor3AngleRate', 'next', 'normal_changed', 'orientation_changed', 'origin', 'pickedGeometry', 'pickedNormal', 'pickedPoint', 'pickedTextureCoordinate', 'position_changed', 'previous', 'progress', 'rotation_changed', 'separation', 'separationRate', 'shiftKey', 'textBounds', 'time', 'timestamp', 'touchTime', 'trackPoint_changed', 'transitionComplete', 'translation_changed', 'triggerTime', 'triggerTrue', 'triggerValue', 'value_changed']
      }, {
        t: 'enum',
        ln: 'JointNames',
        vs: ['HumanoidRoot', 'sacroiliac', 'l_hip', 'l_knee', 'l_ankle', 'l_subtalar', 'l_midtarsal', 'l_metatarsal', 'r_hip', 'r_knee', 'r_ankle', 'r_subtalar', 'r_midtarsal', 'r_metatarsal', 'vl5', 'vl4', 'vl3', 'vl2', 'vl1', 'vt12', 'vt11', 'vt10', 'vt9', 'vt8', 'vt7', 'vt6', 'vt5', 'vt4', 'vt3', 'vt2', 'vt1', 'vc7', 'vc6', 'vc5', 'vc4', 'vc3', 'vc2', 'vc1', 'skullbase', 'l_eyelid_joint', 'r_eyelid_joint', 'l_eyeball_joint', 'r_eyeball_joint', 'l_eyebrow_joint', 'r_eyebrow_joint', 'temporomandibular', 'l_sternoclavicular', 'l_acromioclavicular', 'l_shoulder', 'l_elbow', 'l_wrist', 'l_thumb1', 'l_thumb2', 'l_thumb3', 'l_index0', 'l_index1', 'l_index2', 'l_index3', 'l_middle0', 'l_middle1', 'l_middle2', 'l_middle3', 'l_ring0', 'l_ring1', 'l_ring2', 'l_ring3', 'l_pinky0', 'l_pinky1', 'l_pinky2', 'l_pinky3', 'r_sternoclavicular', 'r_acromioclavicular', 'r_shoulder', 'r_elbow', 'r_wrist', 'r_thumb1', 'r_thumb2', 'r_thumb3', 'r_index0', 'r_index1', 'r_index2', 'r_index3', 'r_middle0', 'r_middle1', 'r_middle2', 'r_middle3', 'r_ring0', 'r_ring1', 'r_ring2', 'r_ring3', 'r_pinky0', 'r_pinky1', 'r_pinky2', 'r_pinky3', 'l_carpometacarpal_joint_2', 'l_metacarpophalangeal_joint_2', 'l_carpal_proximal_interphalangeal_joint_2', 'l_carpal_distal_interphalangeal_joint_2', 'l_midcarpal_joint_3', 'l_carpometacarpal_joint_3', 'l_metacarpophalangeal_joint_3', 'l_carpal_proximal_interphalangeal_joint_3', 'l_carpal_distal_interphalangeal_joint_3', 'l_midcarpal_joint_45', 'l_carpometacarpal_joint_4', 'l_metacarpophalangeal_joint_4', 'l_carpal_proximal_interphalangeal_joint_4', 'l_carpal_distal_interphalangeal_joint_4', 'l_carpometacarpal_joint_5', 'l_metacarpophalangeal_joint_5', 'l_carpal_proximal_interphalangeal_joint_5', 'l_carpal_distal_interphalangeal_joint_5', 'r_radiocarpal_joint', 'r_midcarpal_joint_12', 'r_carpometacarpal_joint_1', 'r_metacarpophalangeal_joint_1', 'r_carpal_interphalangeal_joint_1', 'r_carpometacarpal_joint_2', 'r_metacarpophalangeal_joint_2', 'r_carpal_proximal_interphalangeal_joint_2', 'r_carpal_distal_interphalangeal_joint_2', 'r_midcarpal_joint_3', 'r_carpometacarpal_joint_3', 'r_metacarpophalangeal_joint_3', 'r_carpal_proximal_interphalangeal_joint_3', 'r_carpal_distal_interphalangeal_joint_3', 'r_midcarpal_joint_45', 'r_carpometacarpal_joint_4', 'r_metacarpophalangeal_joint_4', 'r_carpal_proximal_interphalangeal_joint_4', 'r_carpal_distal_interphalangeal_joint_4', 'r_carpometacarpal_joint_5', 'r_metacarpophalangeal_joint_5', 'r_carpal_proximal_interphalangeal_joint_5', 'r_carpal_distal_interphalangeal_joint_5', 'l_tarsometatarsal_joint', 'l_metatarsophalangeal_joint', 'l_tarsal_interphalangeal_joint', 'r_talocrural_joint', 'r_tarsometatarsal_joint', 'r_metatarsophalangeal_joint', 'r_tarsal_interphalangeal_joint']
      }, {
        t: 'enum',
        ln: 'NetworkModeValues',
        vs: ['standAlone', 'networkReader', 'networkWriter']
      }, {
        t: 'enum',
        ln: 'TextureMinificationModeValues',
        vs: ['AVG_PIXEL', 'AVG_PIXEL_AVG_MIPMAP', 'AVG_PIXEL_NEAREST_MIPMAP', 'DEFAULT', 'FASTEST', 'NEAREST_PIXEL', 'NEAREST_PIXEL_AVG_MIPMAP', 'NEAREST_PIXEL_NEAREST_MIPMAP', 'NICEST']
      }, {
        t: 'enum',
        ln: 'VolumeRenderingWeightFunctionTypes',
        vs: ['CONSTANT', 'ALPHA1', 'ALPHA2', 'ONE_MINUS_ALPHA1', 'ONE_MINUS_ALPHA2', 'TABLE']
      }, {
        t: 'enum',
        ln: 'FontStyleValues',
        vs: ['PLAIN', 'BOLD', 'ITALIC', 'BOLDITALIC']
      }, {
        t: 'enum',
        ln: 'TextureCoordinateGeneratorModeValues',
        vs: ['SPHERE', 'CAMERASPACENORMAL', 'CAMERASPACEPOSITION', 'CAMERASPACEREFLECTIONVECTOR', 'SPHERE-LOCAL', 'COORD', 'COORD-EYE', 'NOISE', 'NOISE-EYE', 'SPHERE-REFLECT', 'SPHERE-REFLECT-LOCAL']
      }, {
        t: 'enum',
        ln: 'TextureMagnificationModeValues',
        vs: ['AVG_PIXEL', 'DEFAULT', 'FASTEST', 'NEAREST_PIXEL', 'NICEST']
      }, {
        t: 'enum',
        ln: 'SiteNames',
        vs: ['cervicale', 'crotch', 'l_acromion', 'l_asis', 'l_axilla_ant', 'l_axilla_post', 'l_calcaneous_post', 'l_clavicale', 'l_dactylion', 'l_digit2', 'l_femoral_lateral_epicn', 'l_femoral_medial_epicn', 'l_forefoot_tip', 'l_gonion', 'l_hand_tip', 'l_humeral_lateral_epicn', 'l_humeral_medial_epicn', 'l_iliocristale', 'l_index_distal_tip', 'l_infraorbitale', 'l_knee_crease', 'l_lateral_malleolus', 'l_medial_malleolus', 'l_metacarpal_pha2', 'l_metacarpal_pha5', 'l_metatarsal_pha1', 'l_metatarsal_pha5', 'l_middle_distal_tip', 'l_neck_base', 'l_olecranon', 'l_pinky_distal_tip', 'l_psis', 'l_radial_styloid', 'l_radiale', 'l_rib10', 'l_ring_distal_tip', 'l_sphyrion', 'l_thelion', 'l_thumb_distal_tip', 'l_tragion', 'l_trochanterion', 'l_ulnar_styloid', 'navel', 'nuchale', 'r_acromion', 'r_asis', 'r_axilla_ant', 'r_axilla_post', 'r_calcaneous_post', 'r_clavicale', 'r_dactylion', 'r_digit2', 'r_femoral_lateral_epicn', 'r_femoral_medial_epicn', 'r_forefoot_tip', 'r_gonion', 'r_hand_tip', 'r_humeral_lateral_epicn', 'r_humeral_medial_epicn', 'r_iliocristale', 'r_index_distal_tip', 'r_infraorbitale', 'r_knee_crease', 'r_lateral_malleolus', 'r_medial_malleolus', 'r_metacarpal_pha2', 'r_metacarpal_pha5', 'r_metatarsal_pha1', 'r_metatarsal_pha5', 'r_middle_distal_tip', 'r_neck_base', 'r_olecranon', 'r_pinky_distal_tip', 'r_psis', 'r_radial_styloid', 'r_radiale', 'r_rib10', 'r_ring_distal_tip', 'r_sphyrion', 'r_thelion', 'r_thumb_distal_tip', 'r_tragion', 'r_trochanterion', 'r_ulnar_styloid', 'rib10_midspine', 'sellion', 'skull_tip', 'substernale', 'supramenton', 'suprasternale', 'waist_preferred_post']
      }, {
        t: 'enum',
        ln: 'UnitCategories',
        vs: ['angle', 'force', 'length', 'mass']
      }, {
        t: 'enum',
        ln: 'FeaturePointNames',
        vs: ['sellion', 'r_infraorbitale', 'l_infraorbitale', 'supramenton', 'r_tragion', 'r_gonion', 'l_tragion', 'l_gonion', 'nuchale', 'r_clavicale', 'suprasternale', 'l_clavicale', 'r_thelion\/bustpoint', 'l_thelion\/bustpoint', 'substernale', 'r_rib10', 'r_asis', 'l_rib10', 'l_asis', 'r_iliocristale', 'r_trochanterion', 'l_iliocristale', 'l_trochanterion', 'cervicale', 'rib10_midspine', 'r_psis', 'l_psis', 'waist_preferred_post', 'r_acromion', 'r_axilla_ant', 'r_radial_styloid', 'r_axilla_post.', 'r_olecranon', 'r_humeral_lateral_epicn', 'r_humeral_medial_epicn', 'r_radiale', 'r_metacarpal_pha2', 'r_dactylion', 'r_ulnar_styloid', 'r_metacarpal_pha5', 'l_acromion', 'l_axilla_ant', 'l_radial_styloid', 'l_axilla_post.', 'l_olecranon', 'l_humeral_lateral_epicn', 'l_humeral_medial_epicn', 'l_radiale', 'l_metacarpal_pha2', 'l_dactylion', 'l_ulnar_styloid', 'l_metacarpal_pha5', 'r_knee_crease', 'r_femoral_lateral_epicn', 'r_femoral_medial_epicn', 'r_metatarsal_pha5', 'r_lateral_malleolus', 'r_medial_malleolus', 'r_sphyrion', 'r_metatarsal_pha1', 'r_calcaneous_post.', 'r_digit2', 'l_knee_crease', 'l_femoral_lateral_epicn', 'l_femoral_medial_epicn', 'l_metatarsal_pha5', 'l_lateral_malleolus', 'l_medial_malleolus', 'l_sphyrion', 'l_metatarsal_pha1', 'l_calcaneous_post.', 'l_digit2', 'crotch', 'r_neck_base', 'l_neck_base', 'navel']
      }, {
        t: 'enum',
        ln: 'XvlShellShellTypes',
        vs: ['POLYGON_MESH', 'LATTICE_MESH']
      }, {
        t: 'enum',
        ln: 'InputOnlyAccessTypes',
        vs: ['activate', 'set_articulationParameterValue0', 'set_articulationParameterValue1', 'set_articulationParameterValue2', 'set_articulationParameterValue3', 'set_articulationParameterValue4', 'set_articulationParameterValue5', 'set_articulationParameterValue6', 'set_articulationParameterValue7', 'set_boolean', 'set_bind', 'set_colorIndex', 'set_contacts', 'set_coordIndex', 'set_crossSection', 'set_destination', 'set_fraction', 'set_height', 'set_index', 'set_normalIndex', 'set_orientation', 'set_scale', 'set_spine', 'set_texCoordIndex', 'set_triggerTime']
      }, {
        t: 'enum',
        ln: 'ShaderPartTypeValues',
        vs: ['VERTEX', 'FRAGMENT']
      }, {
        t: 'enum',
        ln: 'FieldTypeName',
        vs: ['SFBool', 'MFBool', 'SFColor', 'MFColor', 'SFColorRGBA', 'MFColorRGBA', 'SFDouble', 'MFDouble', 'SFFloat', 'MFFloat', 'SFImage', 'MFImage', 'SFInt32', 'SFNode', 'MFNode', 'MFInt32', 'SFRotation', 'MFRotation', 'SFString', 'MFString', 'SFTime', 'MFTime', 'SFVec2d', 'MFVec2d', 'SFVec2f', 'MFVec2f', 'SFVec3d', 'MFVec3d', 'SFVec3f', 'MFVec3f', 'SFVec4d', 'MFVec4d', 'SFVec4f', 'MFVec4f', 'SFMatrix3d', 'MFMatrix3d', 'SFMatrix3f', 'MFMatrix3f', 'SFMatrix4d', 'MFMatrix4d', 'SFMatrix4f', 'MFMatrix4f']
      }, {
        t: 'enum',
        ln: 'TextureBoundaryModeValues',
        vs: ['CLAMP', 'CLAMP_TO_EDGE', 'CLAMP_TO_BOUNDARY', 'MIRRORED_REPEAT', 'REPEAT']
      }, {
        t: 'enum',
        ln: 'ArcClose2DTypeValues',
        vs: ['PIE', 'CHORD']
      }, {
        t: 'enum',
        ln: 'MetaDirectionValues',
        vs: ['rtl', 'ltr']
      }, {
        t: 'enum',
        ln: 'MetadataContainerFieldValues',
        vs: ['metadata', 'value']
      }, {
        t: 'enum',
        ln: 'ProfileNames',
        vs: ['Core', 'Interchange', 'CADInterchange', 'Interactive', 'Immersive', 'MedicalInterchange', 'MPEG4Interactive', 'Full']
      }, {
        t: 'enum',
        ln: 'AccessTypeNames',
        vs: ['initializeOnly', 'inputOnly', 'outputOnly', 'inputOutput']
      }, {
        t: 'enum',
        ln: 'TextureCompressionModeValues',
        vs: ['DEFAULT', 'FASTEST', 'HIGH', 'LOW', 'MEDIUM', 'NICEST']
      }, {
        t: 'enum',
        ln: 'ComponentNames',
        vs: ['Core', 'CADGeometry', 'CubeMapTexturing', 'DIS', 'EnvironmentalEffects', 'EnvironmentalSensor', 'EventUtilities', 'Followers', 'Geometry2D', 'Geometry3D', 'Geospatial', 'Grouping', 'H-Anim', 'Interpolation', 'KeyDeviceSensor', 'Layering', 'Layout', 'Lighting', 'Navigation', 'Networking', 'NURBS', 'ParticleSystems', 'Picking', 'PointingDeviceSensor', 'Rendering', 'RigidBodyPhysics', 'Scripting', 'Shaders', 'Shape', 'Sound', 'Text', 'Texturing', 'Texturing3D', 'Time', 'VolumeRendering']
      }, {
        t: 'enum',
        ln: 'AppliedParameterValues',
        vs: ['BOUNCE', 'USER_FRICTION', 'FRICTION_COEFFICIENT-2', 'ERROR_REDUCTION', 'CONSTANT_FORCE', 'SPEED-1', 'SPEED-2', 'SLIP-1', 'SLIP-2']
      }, {
        t: 'enum',
        ln: 'InitializeOnlyAccessTypes',
        vs: ['autoCalc', 'bboxCenter', 'bboxSize', 'beginCap', 'bottom', 'bottomRadius', 'category', 'ccw', 'child1Url', 'child2Url', 'child3Url', 'child4Url', 'closed', 'closureType', 'colorKey', 'colorIndex', 'colorPerVertex', 'convex', 'coordIndex', 'country', 'creaseAngle', 'crossSection', 'directOutput', 'domain', 'duration', 'endCap', 'endAngle', 'extra', 'family', 'forceTransitions', 'generateMipMaps', 'geoGridOrigin', 'geometryType', 'geoSystem', 'height', 'horizontal', 'index', 'info', 'initialDestination', 'initialValue', 'innerRadius', 'internal', 'intersectionType', 'justify', 'kind', 'knot', 'language', 'leftToRight', 'lineSegments', 'mustEvaluate', 'name', 'normalIndex', 'normalPerVertex', 'numComponents', 'order', 'outerRadius', 'phaseFunction', 'pointSize', 'radius', 'range', 'repeatR', 'repeatS', 'repeatT', 'rootUrl', 'rotateYUp', 'rtpHeaderExpected', 'side', 'size', 'solid', 'sortOrder', 'spacing', 'spatialize', 'specific', 'speedFactor', 'spine', 'startAngle', 'style', 'subcategory', 'surfaceArea', 'texCoordIndex', 'texCoordKey', 'title', 'top', 'topToBottom', 'type', 'uClosed', 'uDimension', 'uKnot', 'uOrder', 'vClosed', 'vDimension', 'vKnot', 'vOrder', 'xDimension', 'xSpacing', 'zDimension', 'zSpacing']
      }],
    eis: [{
        en: {
          lp: 'MetadataString'
        },
        ti: '.MetadataString'
      }, {
        en: {
          lp: 'DoubleAxisHingeJoint'
        },
        ti: '.DoubleAxisHingeJoint'
      }, {
        en: {
          lp: 'ElevationGrid'
        },
        ti: '.ElevationGrid'
      }, {
        en: {
          lp: 'EspduTransform'
        },
        ti: '.EspduTransform'
      }, {
        en: {
          lp: 'PositionChaser2D'
        },
        ti: '.PositionChaser2D'
      }, {
        en: {
          lp: 'BallJoint'
        },
        ti: '.BallJoint'
      }, {
        en: {
          lp: 'OrientationInterpolator'
        },
        ti: '.OrientationInterpolator'
      }, {
        en: {
          lp: 'PositionDamper2D'
        },
        ti: '.PositionDamper2D'
      }, {
        en: {
          lp: 'EdgeEnhancementVolumeStyle'
        },
        ti: '.EdgeEnhancementVolumeStyle'
      }, {
        en: {
          lp: 'FogCoordinate'
        },
        ti: '.FogCoordinate'
      }, {
        en: {
          lp: 'UniversalJoint'
        },
        ti: '.UniversalJoint'
      }, {
        en: {
          lp: 'CollisionSpace'
        },
        ti: '.CollisionSpace'
      }, {
        en: {
          lp: 'PixelTexture3D'
        },
        ti: '.PixelTexture3D'
      }, {
        en: {
          lp: 'EXPORT'
        },
        ti: '.EXPORT'
      }, {
        en: {
          lp: 'ColorInterpolator'
        },
        ti: '.ColorInterpolator'
      }, {
        en: {
          lp: 'ForcePhysicsModel'
        },
        ti: '.ForcePhysicsModel'
      }, {
        en: {
          lp: 'HAnimSite'
        },
        ti: '.HAnimSite'
      }, {
        en: {
          lp: 'HAnimDisplacer'
        },
        ti: '.HAnimDisplacer'
      }, {
        en: {
          lp: 'LineProperties'
        },
        ti: '.LineProperties'
      }, {
        en: {
          lp: 'IndexedTriangleSet'
        },
        ti: '.IndexedTriangleSet'
      }, {
        en: {
          lp: 'PolylineEmitter'
        },
        ti: '.PolylineEmitter'
      }, {
        en: {
          lp: 'ProtoInterface'
        },
        ti: '.ProtoInterface'
      }, {
        en: {
          lp: 'Switch'
        },
        ti: '.Switch'
      }, {
        en: {
          lp: 'CADFace'
        },
        ti: '.CADFace'
      }, {
        en: {
          lp: 'X3D'
        },
        ti: '.X3D'
      }, {
        en: {
          lp: 'ReceiverPdu'
        },
        ti: '.ReceiverPdu'
      }, {
        en: {
          lp: 'GeoProximitySensor'
        },
        ti: '.GeoProximitySensor'
      }, {
        en: {
          lp: 'ComposedVolumeStyle'
        },
        ti: '.ComposedVolumeStyle'
      }, {
        en: {
          lp: 'Billboard'
        },
        ti: '.Billboard'
      }, {
        en: {
          lp: 'NurbsSwungSurface'
        },
        ti: '.NurbsSwungSurface'
      }, {
        en: {
          lp: 'ComposedShader'
        },
        ti: '.ComposedShader'
      }, {
        en: {
          lp: 'GeoTransform'
        },
        ti: '.GeoTransform'
      }, {
        en: {
          lp: 'ArcClose2D'
        },
        ti: '.ArcClose2D'
      }, {
        en: {
          lp: 'MultiTextureCoordinate'
        },
        ti: '.MultiTextureCoordinate'
      }, {
        en: {
          lp: 'IS'
        },
        ti: '.IS'
      }, {
        en: {
          lp: 'ScalarDamper'
        },
        ti: '.ScalarDamper'
      }, {
        en: {
          lp: 'ComposedCubeMapTexture'
        },
        ti: '.ComposedCubeMapTexture'
      }, {
        en: {
          lp: 'BooleanToggle'
        },
        ti: '.BooleanToggle'
      }, {
        en: {
          lp: 'ProgramShader'
        },
        ti: '.ProgramShader'
      }, {
        en: {
          lp: 'VolumePickSensor'
        },
        ti: '.VolumePickSensor'
      }, {
        en: {
          lp: 'IndexedFaceSet'
        },
        ti: '.IndexedFaceSet'
      }, {
        en: {
          lp: 'GeoMetadata'
        },
        ti: '.GeoMetadata'
      }, {
        en: {
          lp: 'NormalInterpolator'
        },
        ti: '.NormalInterpolator'
      }, {
        en: {
          lp: 'IndexedLineSet'
        },
        ti: '.IndexedLineSet'
      }, {
        en: {
          lp: 'TimeSensor'
        },
        ti: '.TimeSensor'
      }, {
        en: {
          lp: 'CADLayer'
        },
        ti: '.CADLayer'
      }, {
        en: {
          lp: 'TextureCoordinate4D'
        },
        ti: '.TextureCoordinate4D'
      }, {
        en: {
          lp: 'LayerSet'
        },
        ti: '.LayerSet'
      }, {
        en: {
          lp: 'fieldValue'
        },
        ti: '.FieldValue'
      }, {
        en: {
          lp: 'LocalFog'
        },
        ti: '.LocalFog'
      }, {
        en: {
          lp: 'ExplosionEmitter'
        },
        ti: '.ExplosionEmitter'
      }, {
        en: {
          lp: 'PointEmitter'
        },
        ti: '.PointEmitter'
      }, {
        en: {
          lp: 'CollidableShape'
        },
        ti: '.CollidableShape'
      }, {
        en: {
          lp: 'Polypoint2D'
        },
        ti: '.Polypoint2D'
      }, {
        en: {
          lp: 'IsoSurfaceVolumeData'
        },
        ti: '.IsoSurfaceVolumeData'
      }, {
        en: {
          lp: 'ROUTE'
        },
        ti: '.ROUTE'
      }, {
        en: {
          lp: 'EaseInEaseOut'
        },
        ti: '.EaseInEaseOut'
      }, {
        en: {
          lp: 'CADAssembly'
        },
        ti: '.CADAssembly'
      }, {
        en: {
          lp: 'TwoSidedMaterial'
        },
        ti: '.TwoSidedMaterial'
      }, {
        en: {
          lp: 'NurbsPatchSurface'
        },
        ti: '.NurbsPatchSurface'
      }, {
        en: {
          lp: 'ClipPlane'
        },
        ti: '.ClipPlane'
      }, {
        en: {
          lp: 'MovieTexture'
        },
        ti: '.MovieTexture'
      }, {
        en: {
          lp: 'Text'
        },
        ti: '.Text'
      }, {
        en: {
          lp: 'SliderJoint'
        },
        ti: '.SliderJoint'
      }, {
        en: {
          lp: 'TextureCoordinateGenerator'
        },
        ti: '.TextureCoordinateGenerator'
      }, {
        en: {
          lp: 'Box'
        },
        ti: '.Box'
      }, {
        en: {
          lp: 'LOD'
        },
        ti: '.LOD'
      }, {
        en: {
          lp: 'MetadataBoolean'
        },
        ti: '.MetadataBoolean'
      }, {
        en: {
          lp: 'ScreenFontStyle'
        },
        ti: '.ScreenFontStyle'
      }, {
        en: {
          lp: 'ScalarInterpolator'
        },
        ti: '.ScalarInterpolator'
      }, {
        en: {
          lp: 'ImageTexture'
        },
        ti: '.ImageTexture'
      }, {
        en: {
          lp: 'Collision'
        },
        ti: '.Collision'
      }, {
        en: {
          lp: 'NavigationInfo'
        },
        ti: '.NavigationInfo'
      }, {
        en: {
          lp: 'GeoViewpoint'
        },
        ti: '.GeoViewpoint'
      }, {
        en: {
          lp: 'CoordinateInterpolator'
        },
        ti: '.CoordinateInterpolator'
      }, {
        en: {
          lp: 'HAnimHumanoid'
        },
        ti: '.HAnimHumanoid'
      }, {
        en: {
          lp: 'MultiTextureTransform'
        },
        ti: '.MultiTextureTransform'
      }, {
        en: {
          lp: 'MotorJoint'
        },
        ti: '.MotorJoint'
      }, {
        en: {
          lp: 'Contour2D'
        },
        ti: '.Contour2D'
      }, {
        en: {
          lp: 'SilhouetteEnhancementVolumeStyle'
        },
        ti: '.SilhouetteEnhancementVolumeStyle'
      }, {
        en: {
          lp: 'field'
        },
        ti: '.Field'
      }, {
        en: {
          lp: 'Layout'
        },
        ti: '.Layout'
      }, {
        en: {
          lp: 'TriangleSet'
        },
        ti: '.TriangleSet'
      }, {
        en: {
          lp: 'ShaderProgram'
        },
        ti: '.ShaderProgram'
      }, {
        en: {
          lp: 'GeoTouchSensor'
        },
        ti: '.GeoTouchSensor'
      }, {
        en: {
          lp: 'VolumeData'
        },
        ti: '.VolumeData'
      }, {
        en: {
          lp: 'KeySensor'
        },
        ti: '.KeySensor'
      }, {
        en: {
          lp: 'connect'
        },
        ti: '.Connect'
      }, {
        en: {
          lp: 'Sound'
        },
        ti: '.Sound'
      }, {
        en: {
          lp: 'LoadSensor'
        },
        ti: '.LoadSensor'
      }, {
        en: {
          lp: 'Appearance'
        },
        ti: '.Appearance'
      }, {
        en: {
          lp: 'ScreenGroup'
        },
        ti: '.ScreenGroup'
      }, {
        en: {
          lp: 'TextureBackground'
        },
        ti: '.TextureBackground'
      }, {
        en: {
          lp: 'CoordinateChaser'
        },
        ti: '.CoordinateChaser'
      }, {
        en: {
          lp: 'GeneratedCubeMapTexture'
        },
        ti: '.GeneratedCubeMapTexture'
      }, {
        en: {
          lp: 'BoundedPhysicsModel'
        },
        ti: '.BoundedPhysicsModel'
      }, {
        en: {
          lp: 'PlaneSensor'
        },
        ti: '.PlaneSensor'
      }, {
        en: {
          lp: 'ConeEmitter'
        },
        ti: '.ConeEmitter'
      }, {
        en: {
          lp: 'PackagedShader'
        },
        ti: '.PackagedShader'
      }, {
        en: {
          lp: 'TriangleStripSet'
        },
        ti: '.TriangleStripSet'
      }, {
        en: {
          lp: 'ColorChaser'
        },
        ti: '.ColorChaser'
      }, {
        en: {
          lp: 'TextureTransform3D'
        },
        ti: '.TextureTransform3D'
      }, {
        en: {
          lp: 'VisibilitySensor'
        },
        ti: '.VisibilitySensor'
      }, {
        en: {
          lp: 'OrientationChaser'
        },
        ti: '.OrientationChaser'
      }, {
        en: {
          lp: 'TransformSensor'
        },
        ti: '.TransformSensor'
      }, {
        en: {
          lp: 'NurbsCurve'
        },
        ti: '.NurbsCurve'
      }, {
        en: {
          lp: 'CollisionSensor'
        },
        ti: '.CollisionSensor'
      }, {
        en: {
          lp: 'GeoElevationGrid'
        },
        ti: '.GeoElevationGrid'
      }, {
        en: {
          lp: 'ImageCubeMapTexture'
        },
        ti: '.ImageCubeMapTexture'
      }, {
        en: {
          lp: 'NurbsSurfaceInterpolator'
        },
        ti: '.NurbsSurfaceInterpolator'
      }, {
        en: {
          lp: 'IndexedTriangleStripSet'
        },
        ti: '.IndexedTriangleStripSet'
      }, {
        en: {
          lp: 'ScalarChaser'
        },
        ti: '.ScalarChaser'
      }, {
        en: {
          lp: 'BoundaryEnhancementVolumeStyle'
        },
        ti: '.BoundaryEnhancementVolumeStyle'
      }, {
        en: {
          lp: 'Viewpoint'
        },
        ti: '.Viewpoint'
      }, {
        en: {
          lp: 'TextureTransformMatrix3D'
        },
        ti: '.TextureTransformMatrix3D'
      }, {
        en: {
          lp: 'ToneMappedVolumeStyle'
        },
        ti: '.ToneMappedVolumeStyle'
      }, {
        en: {
          lp: 'Normal'
        },
        ti: '.Normal'
      }, {
        en: {
          lp: 'Fog'
        },
        ti: '.Fog'
      }, {
        en: {
          lp: 'PositionInterpolator2D'
        },
        ti: '.PositionInterpolator2D'
      }, {
        en: {
          lp: 'Inline'
        },
        ti: '.Inline'
      }, {
        en: {
          lp: 'LinePickSensor'
        },
        ti: '.LinePickSensor'
      }, {
        en: {
          lp: 'VolumeEmitter'
        },
        ti: '.VolumeEmitter'
      }, {
        en: {
          lp: 'DISEntityTypeMapping'
        },
        ti: '.DISEntityTypeMapping'
      }, {
        en: {
          lp: 'SegmentedVolumeData'
        },
        ti: '.SegmentedVolumeData'
      }, {
        en: {
          lp: 'IntegerSequencer'
        },
        ti: '.IntegerSequencer'
      }, {
        en: {
          lp: 'GeoLOD'
        },
        ti: '.GeoLOD'
      }, {
        en: {
          lp: 'PrimitivePickSensor'
        },
        ti: '.PrimitivePickSensor'
      }, {
        en: {
          lp: 'SignalPdu'
        },
        ti: '.SignalPdu'
      }, {
        en: {
          lp: 'TextureCoordinate'
        },
        ti: '.TextureCoordinate'
      }, {
        en: {
          lp: 'TransmitterPdu'
        },
        ti: '.TransmitterPdu'
      }, {
        en: {
          lp: 'Matrix4VertexAttribute'
        },
        ti: '.Matrix4VertexAttribute'
      }, {
        en: {
          lp: 'NurbsSweptSurface'
        },
        ti: '.NurbsSweptSurface'
      }, {
        en: {
          lp: 'PixelTexture'
        },
        ti: '.PixelTexture'
      }, {
        en: {
          lp: 'MetadataSet'
        },
        ti: '.MetadataSet'
      }, {
        en: {
          lp: 'PositionChaser'
        },
        ti: '.PositionChaser'
      }, {
        en: {
          lp: 'PositionDamper'
        },
        ti: '.PositionDamper'
      }, {
        en: {
          lp: 'Viewport'
        },
        ti: '.Viewport'
      }, {
        en: {
          lp: 'SingleAxisHingeJoint'
        },
        ti: '.SingleAxisHingeJoint'
      }, {
        en: {
          lp: 'ComposedTexture3D'
        },
        ti: '.ComposedTexture3D'
      }, {
        en: {
          lp: 'head'
        },
        ti: '.Head'
      }, {
        en: {
          lp: 'ShadedVolumeStyle'
        },
        ti: '.ShadedVolumeStyle'
      }, {
        en: {
          lp: 'XvlShell'
        },
        ti: '.XvlShell'
      }, {
        en: {
          lp: 'CartoonVolumeStyle'
        },
        ti: '.CartoonVolumeStyle'
      }, {
        en: {
          lp: 'TriangleSet2D'
        },
        ti: '.TriangleSet2D'
      }, {
        en: {
          lp: 'RigidBodyCollection'
        },
        ti: '.RigidBodyCollection'
      }, {
        en: {
          lp: 'IndexedQuadSet'
        },
        ti: '.IndexedQuadSet'
      }, {
        en: {
          lp: 'GeoCoordinate'
        },
        ti: '.GeoCoordinate'
      }, {
        en: {
          lp: 'WindPhysicsModel'
        },
        ti: '.WindPhysicsModel'
      }, {
        en: {
          lp: 'PickableGroup'
        },
        ti: '.PickableGroup'
      }, {
        en: {
          lp: 'GeoLocation'
        },
        ti: '.GeoLocation'
      }, {
        en: {
          lp: 'CollidableOffset'
        },
        ti: '.CollidableOffset'
      }, {
        en: {
          lp: 'ColorRGBA'
        },
        ti: '.ColorRGBA'
      }, {
        en: {
          lp: 'PointPickSensor'
        },
        ti: '.PointPickSensor'
      }, {
        en: {
          lp: 'Transform'
        },
        ti: '.Transform'
      }, {
        en: {
          lp: 'FontStyle'
        },
        ti: '.FontStyle'
      }, {
        en: {
          lp: 'ProtoBody'
        },
        ti: '.ProtoBody'
      }, {
        en: {
          lp: 'TouchSensor'
        },
        ti: '.TouchSensor'
      }, {
        en: {
          lp: 'DirectionalLight'
        },
        ti: '.DirectionalLight'
      }, {
        en: {
          lp: 'CADPart'
        },
        ti: '.CADPart'
      }, {
        en: {
          lp: 'meta'
        },
        ti: '.Meta'
      }, {
        en: {
          lp: 'GeoPositionInterpolator'
        },
        ti: '.GeoPositionInterpolator'
      }, {
        en: {
          lp: 'StringSensor'
        },
        ti: '.StringSensor'
      }, {
        en: {
          lp: 'ProtoInstance'
        },
        ti: '.ProtoInstance'
      }, {
        en: {
          lp: 'NurbsTextureCoordinate'
        },
        ti: '.NurbsTextureCoordinate'
      }, {
        en: {
          lp: 'Matrix3VertexAttribute'
        },
        ti: '.Matrix3VertexAttribute'
      }, {
        en: {
          lp: 'Layer'
        },
        ti: '.Layer'
      }, {
        en: {
          lp: 'LineSet'
        },
        ti: '.LineSet'
      }, {
        en: {
          lp: 'OrientationDamper'
        },
        ti: '.OrientationDamper'
      }, {
        en: {
          lp: 'Cylinder'
        },
        ti: '.Cylinder'
      }, {
        en: {
          lp: 'NurbsSet'
        },
        ti: '.NurbsSet'
      }, {
        en: {
          lp: 'Extrusion'
        },
        ti: '.Extrusion'
      }, {
        en: {
          lp: 'PointLight'
        },
        ti: '.PointLight'
      }, {
        en: {
          lp: 'LayoutLayer'
        },
        ti: '.LayoutLayer'
      }, {
        en: {
          lp: 'Contact'
        },
        ti: '.Contact'
      }, {
        en: {
          lp: 'ShaderPart'
        },
        ti: '.ShaderPart'
      }, {
        en: {
          lp: 'BooleanTrigger'
        },
        ti: '.BooleanTrigger'
      }, {
        en: {
          lp: 'CollisionCollection'
        },
        ti: '.CollisionCollection'
      }, {
        en: {
          lp: 'HAnimJoint'
        },
        ti: '.HAnimJoint'
      }, {
        en: {
          lp: 'SplineScalarInterpolator'
        },
        ti: '.SplineScalarInterpolator'
      }, {
        en: {
          lp: 'LayoutGroup'
        },
        ti: '.LayoutGroup'
      }, {
        en: {
          lp: 'Coordinate'
        },
        ti: '.Coordinate'
      }, {
        en: {
          lp: 'SplinePositionInterpolator'
        },
        ti: '.SplinePositionInterpolator'
      }, {
        en: {
          lp: 'ColorDamper'
        },
        ti: '.ColorDamper'
      }, {
        en: {
          lp: 'SphereSensor'
        },
        ti: '.SphereSensor'
      }, {
        en: {
          lp: 'NurbsPositionInterpolator'
        },
        ti: '.NurbsPositionInterpolator'
      }, {
        en: {
          lp: 'TriangleFanSet'
        },
        ti: '.TriangleFanSet'
      }, {
        en: {
          lp: 'IMPORT'
        },
        ti: '.IMPORT'
      }, {
        en: {
          lp: 'HAnimSegment'
        },
        ti: '.HAnimSegment'
      }, {
        en: {
          lp: 'TimeTrigger'
        },
        ti: '.TimeTrigger'
      }, {
        en: {
          lp: 'ProximitySensor'
        },
        ti: '.ProximitySensor'
      }, {
        en: {
          lp: 'WorldInfo'
        },
        ti: '.WorldInfo'
      }, {
        en: {
          lp: 'TextureTransform'
        },
        ti: '.TextureTransform'
      }, {
        en: {
          lp: 'Script'
        },
        ti: '.Script'
      }, {
        en: {
          lp: 'SpotLight'
        },
        ti: '.SpotLight'
      }, {
        en: {
          lp: 'DISEntityManager'
        },
        ti: '.DISEntityManager'
      }, {
        en: {
          lp: 'Anchor'
        },
        ti: '.Anchor'
      }, {
        en: {
          lp: 'TexCoordChaser2D'
        },
        ti: '.TexCoordChaser2D'
      }, {
        en: {
          lp: 'MetadataInteger'
        },
        ti: '.MetadataInteger'
      }, {
        en: {
          lp: 'NurbsOrientationInterpolator'
        },
        ti: '.NurbsOrientationInterpolator'
      }, {
        en: {
          lp: 'PositionInterpolator'
        },
        ti: '.PositionInterpolator'
      }, {
        en: {
          lp: 'Polyline2D'
        },
        ti: '.Polyline2D'
      }, {
        en: {
          lp: 'NurbsCurve2D'
        },
        ti: '.NurbsCurve2D'
      }, {
        en: {
          lp: 'ContourPolyline2D'
        },
        ti: '.ContourPolyline2D'
      }, {
        en: {
          lp: 'CoordinateInterpolator2D'
        },
        ti: '.CoordinateInterpolator2D'
      }, {
        en: {
          lp: 'Background'
        },
        ti: '.Background'
      }, {
        en: {
          lp: 'CylinderSensor'
        },
        ti: '.CylinderSensor'
      }, {
        en: {
          lp: 'Material'
        },
        ti: '.Material'
      }, {
        en: {
          lp: 'SplinePositionInterpolator2D'
        },
        ti: '.SplinePositionInterpolator2D'
      }, {
        en: {
          lp: 'unit'
        },
        ti: '.Unit'
      }, {
        en: {
          lp: 'PointSet'
        },
        ti: '.PointSet'
      }, {
        en: {
          lp: 'SurfaceEmitter'
        },
        ti: '.SurfaceEmitter'
      }, {
        en: {
          lp: 'BlendedVolumeStyle'
        },
        ti: '.BlendedVolumeStyle'
      }, {
        en: {
          lp: 'MultiTexture'
        },
        ti: '.MultiTexture'
      }, {
        en: {
          lp: 'Rectangle2D'
        },
        ti: '.Rectangle2D'
      }, {
        en: {
          lp: 'AudioClip'
        },
        ti: '.AudioClip'
      }, {
        en: {
          lp: 'Group'
        },
        ti: '.Group'
      }, {
        en: {
          lp: 'Cone'
        },
        ti: '.Cone'
      }, {
        en: {
          lp: 'ViewpointGroup'
        },
        ti: '.ViewpointGroup'
      }, {
        en: {
          lp: 'RigidBody'
        },
        ti: '.RigidBody'
      }, {
        en: {
          lp: 'StaticGroup'
        },
        ti: '.StaticGroup'
      }, {
        en: {
          lp: 'OpacityMapVolumeStyle'
        },
        ti: '.OpacityMapVolumeStyle'
      }, {
        en: {
          lp: 'ImageTexture3D'
        },
        ti: '.ImageTexture3D'
      }, {
        en: {
          lp: 'FillProperties'
        },
        ti: '.FillProperties'
      }, {
        en: {
          lp: 'ProtoDeclare'
        },
        ti: '.ProtoDeclare'
      }, {
        en: {
          lp: 'QuadSet'
        },
        ti: '.QuadSet'
      }, {
        en: {
          lp: 'SquadOrientationInterpolator'
        },
        ti: '.SquadOrientationInterpolator'
      }, {
        en: {
          lp: 'GeoOrigin'
        },
        ti: '.GeoOrigin'
      }, {
        en: {
          lp: 'Circle2D'
        },
        ti: '.Circle2D'
      }, {
        en: {
          lp: 'MetadataDouble'
        },
        ti: '.MetadataDouble'
      }, {
        en: {
          lp: 'ParticleSystem'
        },
        ti: '.ParticleSystem'
      }, {
        en: {
          lp: 'IntegerTrigger'
        },
        ti: '.IntegerTrigger'
      }, {
        en: {
          lp: 'ProjectionVolumeStyle'
        },
        ti: '.ProjectionVolumeStyle'
      }, {
        en: {
          lp: 'Arc2D'
        },
        ti: '.Arc2D'
      }, {
        en: {
          lp: 'Scene'
        },
        ti: '.Scene'
      }, {
        en: {
          lp: 'ExternProtoDeclare'
        },
        ti: '.ExternProtoDeclare'
      }, {
        en: {
          lp: 'TextureCoordinate3D'
        },
        ti: '.TextureCoordinate3D'
      }, {
        en: {
          lp: 'Color'
        },
        ti: '.Color'
      }, {
        en: {
          lp: 'IndexedTriangleFanSet'
        },
        ti: '.IndexedTriangleFanSet'
      }, {
        en: {
          lp: 'MetadataFloat'
        },
        ti: '.MetadataFloat'
      }, {
        en: {
          lp: 'CoordinateDamper'
        },
        ti: '.CoordinateDamper'
      }, {
        en: {
          lp: 'TexCoordDamper2D'
        },
        ti: '.TexCoordDamper2D'
      }, {
        en: {
          lp: 'BooleanFilter'
        },
        ti: '.BooleanFilter'
      }, {
        en: {
          lp: 'FloatVertexAttribute'
        },
        ti: '.FloatVertexAttribute'
      }, {
        en: {
          lp: 'Shape'
        },
        ti: '.Shape'
      }, {
        en: {
          lp: 'BooleanSequencer'
        },
        ti: '.BooleanSequencer'
      }, {
        en: {
          lp: 'OrthoViewpoint'
        },
        ti: '.OrthoViewpoint'
      }, {
        en: {
          lp: 'Disk2D'
        },
        ti: '.Disk2D'
      }, {
        en: {
          lp: 'CoordinateDouble'
        },
        ti: '.CoordinateDouble'
      }, {
        en: {
          lp: 'NurbsTrimmedSurface'
        },
        ti: '.NurbsTrimmedSurface'
      }, {
        en: {
          lp: 'Sphere'
        },
        ti: '.Sphere'
      }, {
        en: {
          lp: 'TextureProperties'
        },
        ti: '.TextureProperties'
      }, {
        en: {
          lp: 'component'
        },
        ti: '.Component'
      }]
  };
  return {
    x3djson: x3djson
  };
};
if (typeof define === 'function' && define.amd) {
  define([], x3djson_Module_Factory);
}
else {
  var x3djson_Module = x3djson_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.x3djson = x3djson_Module.x3djson;
  }
  else {
    var x3djson = x3djson_Module.x3djson;
  }
}