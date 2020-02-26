(() => {
   // Let's run WebGL 1 content on WebGL 2!

   // -

   class WebGL1on2InstancedArrays {
      const VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;

      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      drawArraysInstancedANGLE() {
         const gl = this._1on2.gl;
         const fn = gl.drawArraysInstanced || gl._1on2.hidden.drawArraysInstanced;
         return fn.apply(gl, arguments);
      }
      drawElementsInstancedANGLE() {
         const gl = this._1on2.gl;
         const fn = gl.drawElementsInstanced || gl._1on2.hidden.drawElementsInstanced;
         return fn.apply(gl, arguments);
      }
      vertexAttribDivisorANGLE() {
         const gl = this._1on2.gl;
         const fn = gl.drawElementsInstanced || gl._1on2.hidden.drawElementsInstanced;
         return fn.apply(gl, arguments);
      }
   };

   class WebGL1on2BlendMinMax {
      const MIN_EXT = 0x8007;
      const MAX_EXT = 0x8008;
   };

   class WebGL1on2FragDepth {};
   class WebGL1on2ShaderTextureLod {};
   class WebGL1on2ElementIndexUint {};
   class WebGL1on2StandardDerivatives {};
   class WebGL1on2TextureFloat {};

   const HALF_FLOAT_OES = 0x8D61;

   class WebGL1on2TextureHalfFloat {
      const HALF_FLOAT_OES = 0x8D61;
   };

   class WebGL1on2TextureHalfFloatLinear {};

   class WebGL1on2VertexArrayObject {
      const VERTEX_ARRAY_BINDING_OES = 0x85B5;

      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      createVertexArrayOES() {
         const gl = this._1on2.gl;
         const fn = gl.createVertexArray || gl._1on2.hidden.createVertexArray;
         return fn.apply(gl, arguments);
      }
      deleteVertexArrayOES() {
         const gl = this._1on2.gl;
         const fn = gl.deleteVertexArray || gl._1on2.hidden.deleteVertexArray;
         return fn.apply(gl, arguments);
      }
      isVertexArrayOES() {
         const gl = this._1on2.gl;
         const fn = gl.isVertexArray || gl._1on2.hidden.isVertexArray;
         return fn.apply(gl, arguments);
      }
      bindVertexArrayOES() {
         const gl = this._1on2.gl;
         const fn = gl.isVertexArray || gl._1on2.hidden.isVertexArray;
         return fn.apply(gl, arguments);
      }
   };

   class WebGL1on2DepthTexture {
      const UNSIGNED_INT_24_8_WEBGL = 0x84FA;
   };

   class WebGL1on2DrawBuffers {
      const COLOR_ATTACHMENT0_WEBGL     = 0x8CE0;
      const COLOR_ATTACHMENT1_WEBGL     = 0x8CE1;
      const COLOR_ATTACHMENT2_WEBGL     = 0x8CE2;
      const COLOR_ATTACHMENT3_WEBGL     = 0x8CE3;
      const COLOR_ATTACHMENT4_WEBGL     = 0x8CE4;
      const COLOR_ATTACHMENT5_WEBGL     = 0x8CE5;
      const COLOR_ATTACHMENT6_WEBGL     = 0x8CE6;
      const COLOR_ATTACHMENT7_WEBGL     = 0x8CE7;
      const COLOR_ATTACHMENT8_WEBGL     = 0x8CE8;
      const COLOR_ATTACHMENT9_WEBGL     = 0x8CE9;
      const COLOR_ATTACHMENT10_WEBGL    = 0x8CEA;
      const COLOR_ATTACHMENT11_WEBGL    = 0x8CEB;
      const COLOR_ATTACHMENT12_WEBGL    = 0x8CEC;
      const COLOR_ATTACHMENT13_WEBGL    = 0x8CED;
      const COLOR_ATTACHMENT14_WEBGL    = 0x8CEE;
      const COLOR_ATTACHMENT15_WEBGL    = 0x8CEF;

      const DRAW_BUFFER0_WEBGL          = 0x8825;
      const DRAW_BUFFER1_WEBGL          = 0x8826;
      const DRAW_BUFFER2_WEBGL          = 0x8827;
      const DRAW_BUFFER3_WEBGL          = 0x8828;
      const DRAW_BUFFER4_WEBGL          = 0x8829;
      const DRAW_BUFFER5_WEBGL          = 0x882A;
      const DRAW_BUFFER6_WEBGL          = 0x882B;
      const DRAW_BUFFER7_WEBGL          = 0x882C;
      const DRAW_BUFFER8_WEBGL          = 0x882D;
      const DRAW_BUFFER9_WEBGL          = 0x882E;
      const DRAW_BUFFER10_WEBGL         = 0x882F;
      const DRAW_BUFFER11_WEBGL         = 0x8830;
      const DRAW_BUFFER12_WEBGL         = 0x8831;
      const DRAW_BUFFER13_WEBGL         = 0x8832;
      const DRAW_BUFFER14_WEBGL         = 0x8833;
      const DRAW_BUFFER15_WEBGL         = 0x8834;

      const MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF;
      const MAX_DRAW_BUFFERS_WEBGL      = 0x8824;


      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      drawBuffersWEBGL() {
         const gl = this._1on2.gl;
         const fn = gl.drawBuffers || gl._1on2.hidden.drawBuffers;
         return fn.apply(gl, arguments);
      }
   };

   class WebGL1on2ColorBufferHalfFloat {
      const RGBA16F_EXT = 0x881A;
      const RGB16F_EXT = 0x881B;
      const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211;
      const UNSIGNED_NORMALIZED_EXT = 0x8C17;
   };

   class WebGL1on2Srgb {
      const SRGB_EXT                                     = 0x8C40;
      const SRGB_ALPHA_EXT                               = 0x8C42;
      const SRGB8_ALPHA8_EXT                             = 0x8C43;
      const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT    = 0x8210;
   };

   class WebGL1on2FboRenderMipmap {};

   class WebGL1on2ColorBufferFloat {
      const RGBA32F_EXT = 0x8814;
      const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211;
      const UNSIGNED_NORMALIZED_EXT = 0x8C17;
   };

   // -

   function hook_general(gl) {
      const builtin_exts = [
         'ANGLE_instanced_arrays',
         'EXT_blend_minmax',
         'EXT_frag_depth',
         'EXT_shader_texture_lod',
         'OES_element_index_uint',
         'OES_standard_derivatives',
         'OES_texture_float',
         'OES_texture_half_float',
         'OES_texture_half_float_linear',
         'OES_vertex_array_object',
         'WEBGL_depth_texture',
         'WEBGL_draw_buffers',

         'EXT_sRGB',
         'OES_fbo_render_mipmap',
      ];

      let supported_exts = gl.getSupportedExtensions();
      if (supported_exts.includes('EXT_color_buffer_float')) {
         supported_exts.push('EXT_color_buffer_half_float');
         supported_exts.push('WEBGL_color_buffer_float');
      }
      supported_exts = supported_exts.concat(builtin_exts);
      gl.getSupportedExtensions = function() {
         return supported_exts.slice();
      }

      {
         const was = gl.getExtension;
         gl.getExtension = function(name) {
            // Activate implied exts if available.
            switch (name) {
            case 'OES_texture_float':
               gl.getExtension('WEBGL_color_buffer_float');
               gl.getExtension('EXT_float_blend');
               break;
            case 'OES_texture_half_float':
               gl.getExtension('EXT_color_buffer_half_float');
               break;
            case 'WEBGL_color_buffer_float':
               gl.getExtension('EXT_float_blend');
               break;
            }

            // Now make the actual ext objects.
            switch (name) {
            case 'ANGLE_instanced_arrays'       : return new WebGL1on2InstancedArrays(gl);
            case 'EXT_blend_minmax'             : return new WebGL1on2BlendMinMax();
            case 'EXT_frag_depth'               : return new WebGL1on2FragDepth();
            case 'EXT_shader_texture_lod'       : return new WebGL1on2ShaderTextureLod();
            case 'OES_element_index_uint'       : return new WebGL1on2ElementIndexUint();
            case 'OES_standard_derivatives'     : return new WebGL1on2StandardDerivatives();
            case 'OES_texture_float'            : return new WebGL1on2TextureFloat();
            case 'OES_texture_half_float'       : return new WebGL1on2TextureHalfFloat();
            case 'OES_texture_half_float_linear': return new WebGL1on2TextureHalfFloatLinear();
            case 'OES_vertex_array_object'      : return new WebGL1on2VertexArrayObject(gl);
            case 'WEBGL_depth_texture'          : return new WebGL1on2DepthTexture();
            case 'WEBGL_draw_buffers'           : return new WebGL1on2DrawBuffers(gl);
            case 'EXT_sRGB'                     : return new WebGL1on2Srgb();
            case 'OES_fbo_render_mipmap'        : return new WebGL1on2FboRenderMipmap();

            case 'EXT_color_buffer_half_float':
               const ext = was.call(this, 'EXT_color_buffer_float');
               if (!ext) return null;
               return new WebGL1on2ColorBufferHalfFloat();

            case 'WEBGL_color_buffer_float':
               const ext = was.call(this, 'EXT_color_buffer_float');
               if (!ext) return null;
               return new WebGL1on2ColorBufferFloat();

            default:
               return was.call(this, name);
            }
         };
      }

      {
         const was = gl.readPixels;
         gl.readPixels = function() {
            if (arguments[5] == HALF_FLOAT_OES) {
               arguments[5] = gl.HALF_FLOAT;
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.renderbufferStorage;
         gl.renderbufferStorage = function() {
            if (arguments[1] == gl.DEPTH_STENCIL) {
               arguments[1] = gl.DEPTH24_STENCIL8;
            }
            was.apply(this, arguments);
         }
      }


      {
         const was = gl.texImage2D;
         gl.texImage2D = function() {
            let format_id, type_id;
            switch (arguments.length) {
            case 9:
               format_id = 6;
               type_id = format_id + 1;
               break;
            case 6:
               format_id = 3;
               type_id = format_id + 1;
               break;
            }
            if (type_id && arguments[type_id] == HALF_FLOAT_OES) {
               arguments[type_id] = gl.HALF_FLOAT;
            }
            was.apply(this, arguments);
         }
      }
      {
         const was = gl.texSubImage2D;
         gl.texSubImage2D = function() {
            let format_id, type_id;
            switch (arguments.length) {
            case 9:
               format_id = 6;
               type_id = format_id + 1;
               break;
            case 7:
               format_id = 3;
               type_id = format_id + 1;
               break;
            }
            if (type_id && arguments[type_id] == HALF_FLOAT_OES) {
               arguments[type_id] = gl.HALF_FLOAT;
            }
            was.apply(this, arguments);
         }
      }
   };

   function hook_shader_source(gl) {
      {
         const was = gl.createShader;
         gl.createShader = function(type) {
            const ret = was.apply(this, arguments);
            if (ret) {
               ret._1on2 = {
                  type: type == gl.VERTEX_SHADER ? 'vs' : 'fs',
               };
            }
            return ret;
         };
      }

      {
         const was = gl.shaderSource;
         gl.shaderSource = function(shader, source) {
            if (shader._1on2) {
               const before = source;

               const re_attrib = /(\W)attribute(\W)/g;
               const re_varying = /(\W)varying(\W)/g;
               const re_frag_color = /(\W)gl_FragColor(\W)/g;
               const re_frag_data = /(\W)gl_FragData(\W)/g;
               const re_ext_draw_buffers = /# *extension +GL_EXT_draw_buffers *: *.*\n/g;
               const re_ext_frag_depth = /# *extension +GL_EXT_frag_depth *: *.*\n/g;
               const re_ext_shader_texture_lod = /# *extension +GL_EXT_shader_texture_lod *: *.*\n/g;
               const re_ext_standard_derivatives = /# *extension +GL_OES_standard_derivatives *: *.*\n/g;

               const type = shader._1on2.type;

               const header = [
                  '#version 300 es',
                  '#define GL_FRAGMENT_PRECISION_HIGH 1',

                  '#define texture2D texture',
                  '#define texture2DLod textureLod',
                  '#define texture2DProj textureProj',
                  '#define texture2DProjLod textureProjLod',
                  '#define textureCube texture',
                  '#define textureCubeLod textureLod',

                  '#define GL_EXT_draw_buffers 1',

                  '#define GL_EXT_frag_depth 1',
                  '#define gl_FragDepthEXT gl_FragDepth',

                  '#define GL_EXT_shader_texture_lod 1',
                  '#define texture2DLodEXT textureLod',
                  '#define texture2DProjLodEXT textureProjLod',
                  '#define textureCubeLodEXT textureLod',
                  '#define texture2DGradEXT textureGrad',
                  '#define texture2DProjGradEXT textureProjGrad',
                  '#define textureCubeGradEXT textureGrad',

                  '#define GL_OES_standard_derivatives 1',
               ];
               source = source.replace(re_ext_draw_buffers, '\n');
               source = source.replace(re_ext_frag_depth, '\n');
               source = source.replace(re_ext_shader_texture_lod, '\n');
               source = source.replace(re_ext_standard_derivatives, '\n');

               if (type == 'vs') {
                  source = source.replace(re_attrib, '$1in$2');
                  source = source.replace(re_varying, '$1out$2');
               } else {
                  header.push('out highp vec4 _1on2_FragData[gl_MaxDrawBuffers];');
                  source = source.replace(re_varying, '$1in$2');
                  source = source.replace(re_frag_color, '$1gl_FragData[0]$2');
                  source = source.replace(re_frag_data, '$1_1on2_FragData$2');
               }

               // -

               source = header.join('\n') + '\n#line 1\n' + source;
               console.log(type, 'before', before, 'after', source);
            }
            arguments[1] = source;
            was.apply(this, arguments);
         };
      }
   }

   prev = HTMLCanvasElement.prototype.getContext;
   HTMLCanvasElement.prototype.getContext = function() {
      const as_strict = (arguments[0] == 'webgl');
      const as_hybrid = (arguments[0] == 'webgl1on2');
      const as_1on2 = (as_strict || as_hybrid);
      if (as_1on2) {
         arguments[0] = 'webgl2';
      }

      const ret = prev.apply(this, arguments);
      if (as_1on2 && ret && !ret._1on2) {
         ret._1on2 = {
         };
         hook_general(ret);
         hook_shader_source(ret);
      }
      return ret;
   }
})();
