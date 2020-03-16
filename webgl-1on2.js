(() => {
   // Let's run WebGL 1 content on WebGL 2!

   const REPLACE_WEBGL1 = true;
   const DEBUG_SPEW = false;

   // -

   if (window.WebGL1on2) return;
   window.WebGL1on2 = true;

   if (DEBUG_SPEW) {
      console.log('[webgl-1on2] Injecting...');
   }

   // -

   class WebGL1on2InstancedArrays {
      VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = WebGL2RenderingContext.VERTEX_ATTRIB_ARRAY_DIVISOR;

      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      drawArraysInstancedANGLE() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.drawArraysInstanced.apply(gl, arguments);
      }
      drawElementsInstancedANGLE() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.drawElementsInstanced.apply(gl, arguments);
      }
      vertexAttribDivisorANGLE() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.vertexAttribDivisor.apply(gl, arguments);
      }
   };

   class WebGL1on2BlendMinMax {
      MIN_EXT = WebGL2RenderingContext.MIN;
      MAX_EXT = WebGL2RenderingContext.MAX;
   };

   class WebGL1on2FragDepth {};
   class WebGL1on2ShaderTextureLod {};
   class WebGL1on2ElementIndexUint {};
   class WebGL1on2StandardDerivatives {};
   class WebGL1on2TextureFloat {};

   const GL_HALF_FLOAT_OES = 0x8D61;

   class WebGL1on2TextureHalfFloat {
      HALF_FLOAT_OES = GL_HALF_FLOAT_OES;
   };

   class WebGL1on2TextureHalfFloatLinear {};

   class WebGL1on2VertexArrayObject {
      VERTEX_ARRAY_BINDING_OES = WebGL2RenderingContext.VERTEX_ARRAY_BINDING;

      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      createVertexArrayOES() {
         const gl = this._1on2.gl;
         if (!gl) return null;
         return gl.__proto__.createVertexArray.apply(gl, arguments);
      }
      deleteVertexArrayOES() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.deleteVertexArray.apply(gl, arguments);
      }
      isVertexArrayOES() {
         const gl = this._1on2.gl;
         if (!gl) return false;
         return gl.__proto__.isVertexArray.apply(gl, arguments);
      }
      bindVertexArrayOES() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.isVertexArray.apply(gl, arguments);
      }
   };

   class WebGL1on2DepthTexture {
      UNSIGNED_INT_24_8_WEBGL = WebGL2RenderingContext.UNSIGNED_INT_24_8;
   };

   class WebGL1on2DrawBuffers {
      COLOR_ATTACHMENT0_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0;
      COLOR_ATTACHMENT1_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 1;
      COLOR_ATTACHMENT2_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 2;
      COLOR_ATTACHMENT3_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 3;
      COLOR_ATTACHMENT4_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 4;
      COLOR_ATTACHMENT5_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 5;
      COLOR_ATTACHMENT6_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 6;
      COLOR_ATTACHMENT7_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 7;
      COLOR_ATTACHMENT8_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 8;
      COLOR_ATTACHMENT9_WEBGL     = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 9;
      COLOR_ATTACHMENT10_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 10;
      COLOR_ATTACHMENT11_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 11;
      COLOR_ATTACHMENT12_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 12;
      COLOR_ATTACHMENT13_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 13;
      COLOR_ATTACHMENT14_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 14;
      COLOR_ATTACHMENT15_WEBGL    = WebGL2RenderingContext.COLOR_ATTACHMENT0 + 15;

      DRAW_BUFFER0_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0;
      DRAW_BUFFER1_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 1;
      DRAW_BUFFER2_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 2;
      DRAW_BUFFER3_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 3;
      DRAW_BUFFER4_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 4;
      DRAW_BUFFER5_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 5;
      DRAW_BUFFER6_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 6;
      DRAW_BUFFER7_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 7;
      DRAW_BUFFER8_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 8;
      DRAW_BUFFER9_WEBGL     = WebGL2RenderingContext.DRAW_BUFFER0 + 9;
      DRAW_BUFFER10_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 10;
      DRAW_BUFFER11_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 11;
      DRAW_BUFFER12_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 12;
      DRAW_BUFFER13_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 13;
      DRAW_BUFFER14_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 14;
      DRAW_BUFFER15_WEBGL    = WebGL2RenderingContext.DRAW_BUFFER0 + 15;

      MAX_COLOR_ATTACHMENTS_WEBGL = WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS;
      MAX_DRAW_BUFFERS_WEBGL      = WebGL2RenderingContext.MAX_DRAW_BUFFERS;


      constructor(gl) {
         this._1on2 = {
            gl: gl,
         };
      }

      drawBuffersWEBGL() {
         const gl = this._1on2.gl;
         if (!gl) return;
         return gl.__proto__.drawBuffers.apply(gl, arguments);
      }
   };

   class WebGL1on2ColorBufferHalfFloat {
      RGBA16F_EXT = WebGL2RenderingContext.RGBA16F;
      RGB16F_EXT = WebGL2RenderingContext.RGB16F;
      FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = WebGL2RenderingContext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE;
      UNSIGNED_NORMALIZED_EXT = WebGL2RenderingContext.UNSIGNED_NORMALIZED;
   };

   class WebGL1on2Srgb {
      SRGB_EXT                                     = WebGL2RenderingContext.SRGB;
      SRGB_ALPHA_EXT                               = WebGL2RenderingContext.SRGB_ALPHA;
      SRGB8_ALPHA8_EXT                             = WebGL2RenderingContext.SRGB8_ALPHA8;
      FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT    = WebGL2RenderingContext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING;
   };

   class WebGL1on2FboRenderMipmap {};

   class WebGL1on2ColorBufferFloat {
      RGBA32F_EXT = WebGL2RenderingContext.RGBA32F;
      FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = WebGL2RenderingContext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE;
      UNSIGNED_NORMALIZED_EXT = WebGL2RenderingContext.UNSIGNED_NORMALIZED;
   };

   // -

   function hook(gl) {
      const strict = gl._1on2.strict;

      // -

      const BUFFER_TARGETS = new Set([
         gl.ARRAY_BUFFER,
         gl.ELEMENT_ARRAY_BUFFER,
      ]);
      const PIXEL_STORE_PNAMES = new Set([
         gl.PACK_ALIGNMENT,
         gl.UNPACK_ALIGNMENT,
         gl.UNPACK_FLIP_Y_WEBGL,
         gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
         gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,
      ]);
      const TEXTURE_TARGETS = new Set([
         gl.TEXTURE_2D,
         gl.TEXTURE_CUBE_MAP,
      ]);
      const VERTEX_ATTRIB_TYPES = new Set([
         gl.BYTE,
         gl.SHORT,
         gl.UNSIGNED_BYTE,
         gl.UNSIGNED_SHORT,
         gl.FLOAT,
      ]);

      let NUM_DRAW_BUFFERS;

      let DRAW_ELEMENTS_TYPES;
      let ENABLED_EXTS;
      let GET_PARAMETER_PNAMES;
      let RENDERBUFFER_STORAGE_FORMATS;
      let TEX_IMAGE_FORMATS;
      let TEX_IMAGE_TYPES;

      const fn_reset = function() {
         for (const k in ENABLED_EXTS) {
            const ext = ENABLED_EXTS[k];
            if (ext._1on2) {
               ext._1on2.gl = null;
            }
         }
         ENABLED_EXTS = {};

         // -

         NUM_DRAW_BUFFERS = 1;

         DRAW_ELEMENTS_TYPES = new Set([
            gl.UNSIGNED_BYTE,
            gl.UNSIGNED_SHORT,
         ]);
         GET_PARAMETER_PNAMES = new Set([,
            gl.ACTIVE_TEXTURE,
            gl.ALIASED_LINE_WIDTH_RANGE,
            gl.ALIASED_POINT_SIZE_RANGE,
            gl.ALPHA_BITS,
            gl.ARRAY_BUFFER_BINDING,
            gl.BLEND,
            gl.BLEND_COLOR,
            gl.BLEND_DST_ALPHA,
            gl.BLEND_DST_RGB,
            gl.BLEND_EQUATION,
            gl.BLEND_EQUATION_ALPHA,
            gl.BLEND_EQUATION_RGB,
            gl.BLEND_SRC_ALPHA,
            gl.BLEND_SRC_RGB,
            gl.BLUE_BITS,
            gl.COLOR_CLEAR_VALUE,
            gl.COLOR_WRITEMASK,
            gl.COMPRESSED_TEXTURE_FORMATS,
            gl.CULL_FACE,
            gl.CULL_FACE_MODE,
            gl.CURRENT_PROGRAM,
            gl.DEPTH_BITS,
            gl.DEPTH_CLEAR_VALUE,
            gl.DEPTH_FUNC,
            gl.DEPTH_RANGE,
            gl.DEPTH_TEST,
            gl.DEPTH_WRITEMASK,
            gl.DITHER,
            gl.ELEMENT_ARRAY_BUFFER_BINDING,
            gl.FRAMEBUFFER_BINDING,
            gl.FRONT_FACE,
            gl.GENERATE_MIPMAP_HINT,
            gl.GREEN_BITS,
            gl.IMPLEMENTATION_COLOR_READ_FORMAT,
            gl.IMPLEMENTATION_COLOR_READ_TYPE,
            gl.LINE_WIDTH,
            gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS,
            gl.MAX_CUBE_MAP_TEXTURE_SIZE,
            gl.MAX_FRAGMENT_UNIFORM_VECTORS,
            gl.MAX_RENDERBUFFER_SIZE,
            gl.MAX_TEXTURE_IMAGE_UNITS,
            gl.MAX_TEXTURE_SIZE,
            gl.MAX_VARYING_VECTORS,
            gl.MAX_VERTEX_ATTRIBS,
            gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS,
            gl.MAX_VERTEX_UNIFORM_VECTORS,
            gl.MAX_VIEWPORT_DIMS,
            gl.PACK_ALIGNMENT,
            gl.POLYGON_OFFSET_FACTOR,
            gl.POLYGON_OFFSET_FILL,
            gl.POLYGON_OFFSET_UNITS,
            gl.RED_BITS,
            gl.RENDERBUFFER_BINDING,
            gl.RENDERER,
            gl.SAMPLE_BUFFERS,
            gl.SAMPLE_COVERAGE_INVERT,
            gl.SAMPLE_COVERAGE_VALUE,
            gl.SAMPLES,
            gl.SCISSOR_BOX,
            gl.SCISSOR_TEST,
            gl.SHADING_LANGUAGE_VERSION,
            gl.STENCIL_BACK_FAIL,
            gl.STENCIL_BACK_FUNC,
            gl.STENCIL_BACK_PASS_DEPTH_FAIL,
            gl.STENCIL_BACK_PASS_DEPTH_PASS,
            gl.STENCIL_BACK_REF,
            gl.STENCIL_BACK_VALUE_MASK,
            gl.STENCIL_BACK_WRITEMASK,
            gl.STENCIL_BITS,
            gl.STENCIL_CLEAR_VALUE,
            gl.STENCIL_FAIL,
            gl.STENCIL_FUNC,
            gl.STENCIL_PASS_DEPTH_FAIL,
            gl.STENCIL_PASS_DEPTH_PASS,
            gl.STENCIL_REF,
            gl.STENCIL_TEST,
            gl.STENCIL_VALUE_MASK,
            gl.STENCIL_WRITEMASK,
            gl.SUBPIXEL_BITS,
            gl.TEXTURE_BINDING_2D,
            gl.TEXTURE_BINDING_CUBE_MAP,
            gl.UNPACK_ALIGNMENT,
            gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,
            gl.UNPACK_FLIP_Y_WEBGL,
            gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
            gl.VENDOR,
            gl.VERSION,
            gl.VIEWPORT,
         ]);
         RENDERBUFFER_STORAGE_FORMATS = new Set([
            gl.RGBA4,
            gl.RGB565,
            gl.RGB5_A1,
            gl.DEPTH_COMPONENT16,
            gl.STENCIL_INDEX8,
            gl.DEPTH_STENCIL,
         ]);
         TEX_IMAGE_FORMATS = new Set([
            gl.RGBA,
            gl.RGB,
            gl.LUMINANCE,
            gl.ALPHA,
            gl.LUMINANCE_ALPHA,
         ]);
         TEX_IMAGE_TYPES = new Set([
            gl.UNSIGNED_BYTE,
            gl.UNSIGNED_SHORT_4_4_4_4,
            gl.UNSIGNED_SHORT_5_5_5_1,
            gl.UNSIGNED_SHORT_5_6_5,
         ]);
      };

      fn_reset();

      gl.canvas.addEventListener('webglcontextlost', () => {
         fn_reset();
      });

      // -

      let top_error = 0;

      function get_error() {
         return gl.__proto__.getError.call(gl);
      }

      function flush_error() {
         const err = get_error();
         if (!top_error) {
            top_error = err;
         }
      };

      // -

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
         if (gl.isContextLost()) return null;
         return supported_exts.slice();
      }

      {
         const was = gl.getExtension;
         gl.getExtension = function(name) {
            let ext = ENABLED_EXTS[name];
            if (ext) return ext;
            return ENABLED_EXTS[name] = (() => {
               console.log(`+getExtension(${name})`);
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
               case 'EXT_blend_minmax':
                  BLEND_MODES.add(gl.__proto__.MIN);
                  BLEND_MODES.add(gl.__proto__.MAX);
                  return new WebGL1on2BlendMinMax();

               case 'EXT_frag_depth'               : return new WebGL1on2FragDepth();
               case 'EXT_shader_texture_lod'       : return new WebGL1on2ShaderTextureLod();
               case 'OES_element_index_uint':
                  DRAW_ELEMENTS_TYPES.add(gl.UNSIGNED_INT);
                  return new WebGL1on2ElementIndexUint();

               case 'OES_standard_derivatives'     : return new WebGL1on2StandardDerivatives();

               case 'OES_texture_float':
                  TEX_IMAGE_TYPES.add(gl.FLOAT);
                  return new WebGL1on2TextureFloat();

               case 'OES_texture_half_float':
                  TEX_IMAGE_TYPES.add(GL_HALF_FLOAT_OES);
                  return new WebGL1on2TextureHalfFloat();

               case 'OES_texture_half_float_linear': return new WebGL1on2TextureHalfFloatLinear();
               case 'OES_vertex_array_object'      : return new WebGL1on2VertexArrayObject(gl);
               case 'WEBGL_depth_texture'          : return new WebGL1on2DepthTexture();

               case 'WEBGL_draw_buffers':
                  NUM_DRAW_BUFFERS = gl.__proto__.getParameter.call(gl, gl.__proto__.MAX_DRAW_BUFFERS);
                  for (let i = 0; i < 16; i++) {
                     GET_PARAMETER_PNAMES.add(gl.__proto__.COLOR_ATTACHMENT0+i);
                     GET_PARAMETER_PNAMES.add(gl.__proto__.DRAW_BUFFER0+i);
                  }
                  GET_PARAMETER_PNAMES.add(gl.__proto__.MAX_COLOR_ATTACHMENTS);
                  GET_PARAMETER_PNAMES.add(gl.__proto__.MAX_DRAW_BUFFERS);
                  return new WebGL1on2DrawBuffers(gl);

               case 'EXT_sRGB'                     : return new WebGL1on2Srgb();
               case 'OES_fbo_render_mipmap'        : return new WebGL1on2FboRenderMipmap();

               case 'EXT_color_buffer_half_float':
                  ext = was.call(this, 'EXT_color_buffer_float');
                  if (!ext) return null;
                  return new WebGL1on2ColorBufferHalfFloat();

               case 'WEBGL_color_buffer_float':
                  ext = was.call(this, 'EXT_color_buffer_float');
                  if (!ext) return null;
                  return new WebGL1on2ColorBufferFloat();

               default:
                  return was.call(this, name);
               }
            })();
         };
      }


      {
         const was = gl.bindBuffer;
         gl.bindBuffer = function() {
            if (strict) {
               if (!BUFFER_TARGETS.has(arguments[0])) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.bindFramebuffer;
         gl.bindFramebuffer = function() {
            if (strict) {
               if (arguments[0] != gl.FRAMEBUFFER) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.bindTexture;
         gl.bindTexture = function() {
            if (strict) {
               if (!TEXTURE_TARGETS.has(arguments[0])) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      // -

      {
         const was = gl.drawElements;
         gl.drawElements = function() {
            if (strict) {
               if (!DRAW_ELEMENTS_TYPES.has(arguments[2])) {
                  arguments[2] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.disable;
         gl.disable = function() {
            if (strict) {
               if (arguments[0] == gl.__proto__.RASTERIZER_DISCARD) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }
      {
         const was = gl.enable;
         gl.enable = function() {
            if (strict) {
               if (arguments[0] == this.__proto__.RASTERIZER_DISCARD) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }
      {
         const was = gl.getParameter;
         gl.getParameter = function() {
            if (strict) {
               //console.log('getParameter', arguments[0].toString(16));
               if (!GET_PARAMETER_PNAMES.has(arguments[0])) {
                  arguments[0] += 0x10000;
               }
            }
            return was.apply(this, arguments);
         }
      }

      // -

      {
         const was = gl.framebufferRenderbuffer;
         gl.framebufferRenderbuffer = function() {
            if (strict) {
               switch (arguments[1]) {
               case gl.DEPTH_ATTACHMENT:
               case gl.STENCIL_ATTACHMENT:
               case gl.DEPTH_STENCIL_ATTACHMENT:
                  break;
               default:
                  if (arguments[1] - gl.COLOR_ATTACHMENT0 >= NUM_DRAW_BUFFERS) {
                     arguments[1] += 0x10000;
                  }
                  break;
               }
            }
            was.apply(this, arguments);
         }
      }
      {
         const was = gl.framebufferTexture2D;
         gl.framebufferTexture2D = function() {
            if (strict) {
               switch (arguments[1]) {
               case gl.DEPTH_ATTACHMENT:
               case gl.STENCIL_ATTACHMENT:
               case gl.DEPTH_STENCIL_ATTACHMENT:
                  break;
               default:
                  if (arguments[1] - gl.COLOR_ATTACHMENT0 >= NUM_DRAW_BUFFERS) {
                     arguments[1] += 0x10000;
                  }
                  break;
               }

               if (arguments[4] != 0) {
                  arguments[4] = -1;
               }
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.pixelStorei;
         gl.pixelStorei = function() {
            if (strict) {
               if (!PIXEL_STORE_PNAMES.has(arguments[0])) {
                  arguments[0] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.readPixels;
         gl.readPixels = function() {
            if (arguments[5] == GL_HALF_FLOAT_OES) {
               arguments[5] = gl.HALF_FLOAT;
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.renderbufferStorage;
         gl.renderbufferStorage = function() {
            if (strict) {
               if (!RENDERBUFFER_STORAGE_FORMATS.has(arguments[1])) {
                  arguments[1] += 0x10000; // 0x1408 would become 0x11408.
               }
            }
            if (arguments[1] == gl.DEPTH_STENCIL) {
               arguments[1] = gl.__proto__.DEPTH24_STENCIL8;
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.texImage2D;
         gl.texImage2D = function() {
            let internalformat_id, format_id, type_id;
            //console.log('texImage2D', ...arguments);
            switch (arguments.length) {
            case 9:
               internalformat_id = 2;
               format_id = 6;
               type_id = format_id + 1;
               break;
            case 6:
               internalformat_id = 2;
               format_id = 3;
               type_id = format_id + 1;
               break;
            default:
               console.warning(`texImage2D[${arguments.length}]`);
               if (strict) {
                  throw new Error('Too many arguments: ' + arguments);
               }
               break;
            }

            if (strict) {
               if (!TEX_IMAGE_FORMATS.has(arguments[format_id])) {
                  arguments[format_id] += 0x10000;
               }
               if (!TEX_IMAGE_TYPES.has(arguments[type_id])) {
                  arguments[type_id] += 0x10000;
               }
            }

            if (type_id && arguments[type_id] == GL_HALF_FLOAT_OES) {
               arguments[type_id] = gl.__proto__.HALF_FLOAT;
               switch (arguments[internalformat_id]) {
                  case gl.RGB:
                     arguments[internalformat_id] = gl.__proto__.RGB16F;
                     break;
                  case gl.RGBA:
                     arguments[internalformat_id] = gl.__proto__.RGBA16F;
                     break;
                  case gl.LUMINANCE:
                  case gl.ALPHA:
                  case gl.LUMINANCE_ALPHA:
                     console.warning(`texImage with {format: ${arguments[internalformat_id]}, type:`
                                     + `${arguments[type_id]}} not yet supported.`);
                     break;
               }
            }
            if (type_id && arguments[type_id] == gl.FLOAT) {
               switch (arguments[internalformat_id]) {
                  case gl.RGB:
                     arguments[internalformat_id] = gl.__proto__.RGB32F;
                     break;
                  case gl.RGBA:
                     arguments[internalformat_id] = gl.__proto__.RGBA32F;
                     break;
                  case gl.LUMINANCE:
                  case gl.ALPHA:
                  case gl.LUMINANCE_ALPHA:
                     console.warning(`texImage with {format: ${arguments[internalformat_id]}, type:`
                                     + `${arguments[type_id]}} not yet supported.`);
                     break;
               }
            }
            //console.log(`=> ${arguments[internalformat_id]}`);

            was.apply(this, arguments);
         }
      }
      {
         const was = gl.texSubImage2D;
         gl.texSubImage2D = function() {
            //console.log('texSubImage2D', ...arguments);
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
            default:
               if (strict) {
                  throw new Error('Too many arguments: ' + arguments);
               }
               break;
            }
            if (strict) {
               if (!TEX_IMAGE_FORMATS.has(arguments[format_id])) {
                  arguments[format_id] += 0x10000;
               }
               if (!TEX_IMAGE_TYPES.has(arguments[type_id])) {
                  arguments[type_id] += 0x10000;
               }
            }

            if (type_id && arguments[type_id] == GL_HALF_FLOAT_OES) {
               arguments[type_id] = gl.__proto__.HALF_FLOAT;
            }
            was.apply(this, arguments);
         }
      }

      {
         const was = gl.vertexAttribPointer;
         gl.vertexAttribPointer = function() {
            if (strict) {
               const type_id = 2;
               if (!VERTEX_ATTRIB_TYPES.has(arguments[type_id])) {
                  arguments[type_id] += 0x10000;
               }
            }
            was.apply(this, arguments);
         }
      }

      // -
      // Hook shaders

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
         const was = gl.compileShader;
         gl.compileShader = function(shader) {
            // I guess just pass through, then do the real work in compileShader.
            if (!shader._1on2) return;

            const before = gl.getShaderSource(shader);
            if (before === null) return; // context loss

            const CORE_EXT_BY_GLSL = {
               'GL_EXT_frag_depth': 'EXT_frag_depth',
               'GL_EXT_shader_texture_lod': 'EXT_shader_texture_lod',
               'GL_OES_standard_derivatives': 'OES_standard_derivatives',
               'GL_EXT_draw_buffers': 'WEBGL_draw_buffers',
            };

            // -

            let source = before;

            function to_namespace(name) {
               return '_1on2_' + name;
            }

            function namespace_replace(name) {
               const re = new RegExp(`\\b${name}\\b`, 'g');
               source = source.replace(re, '_1on2_' + name);
            }

            // -

            // "extension directive must occur before any non-preprocessor tokens in ESSL"

            let header = [
               '#version 300 es',

               '#define texture2D texture',
               '#define texture2DLod textureLod',
               '#define texture2DProj textureProj',
               '#define texture2DProjLod textureProjLod',
               '#define textureCube texture',
               '#define textureCubeLod textureLod',

               // EXT_shader_texture_lod
               '#define texture2DLodEXT textureLod',
               '#define texture2DProjLodEXT textureProjLod',
               '#define textureCubeLodEXT textureLod',
               '#define texture2DGradEXT textureGrad',
               '#define texture2DProjGradEXT textureProjGrad',
               '#define textureCubeGradEXT textureGrad',
            ];

            const re_ext = / *# *extension +([A-Za-z0-9_]+) *: *([a-z]+)/g;
            let draw_buffers_enabled = false;
            for (const match of source.matchAll(re_ext)) {
               const [str, glsl_ext, directive] = match;
               const gl_ext = CORE_EXT_BY_GLSL[glsl_ext];
               if (!gl_ext) {
                  header.push(str);
                  continue;
               }
               const gl_enabled = !!ENABLED_EXTS[gl_ext];
               if (!gl_enabled) {
                  header.push(str);
                  continue;
               }
               header.push()

               const glsl_enabled = (directive != 'disable');

               switch (gl_ext) {
               case 'EXT_frag_depth':
                  if (glsl_enabled) {
                     header.push('#define gl_FragDepthEXT gl_FragDepth');
                  }
                  break;

               case 'EXT_shader_texture_lod':
                  if (glsl_enabled) {
                     header = header.concat([
                        '#define texture2DLodEXT textureLod',
                        '#define texture2DProjLodEXT textureProjLod',
                        '#define textureCubeLodEXT textureLod',
                        '#define texture2DGradEXT textureGrad',
                        '#define texture2DProjGradEXT textureProjGrad',
                        '#define textureCubeGradEXT textureGrad'
                     ]);
                  }
                  break;

               case 'OES_standard_derivatives':
                  if (!glsl_enabled) {
                     header = header.concat([
                        '#define dFdx _1on2_disabled_dFdx',
                        '#define dFdy _1on2_disabled_dFdy',
                        '#define fwidth _1on2_disabled_fwidth',
                     ]);
                  }
                  break;

               case 'WEBGL_draw_buffers':
                  draw_buffers_enabled = glsl_enabled;
                  break;
               }
            }
            source = source.replace(re_ext, '');

            const max_draw_buffers = NUM_DRAW_BUFFERS;
            header.push(`const mediump int ${to_namespace('gl_MaxDrawBuffers')} = ${max_draw_buffers};`);
            namespace_replace('gl_MaxDrawBuffers');

            for (const glslext in CORE_EXT_BY_GLSL) {
               const glext = CORE_EXT_BY_GLSL[glslext];
               namespace_replace(glslext);
               if (!ENABLED_EXTS[glext]) continue;
               header.push(`#define ${to_namespace(glslext)} 1`);
            }

            // `texture` is newly reserved in essl300.
            namespace_replace('texture');

            const type = shader._1on2.type;
            if (type == 'vs') {
               source = source.replace(/\battribute\b/g, 'in');
               source = source.replace(/\bvarying\b/g, 'out');
            } else {
               source = source.replace(/\bvarying\b/g, 'in');

               const has_frag_color = (source.search(/\bgl_FragColor\b/g) != -1);
               source = source.replace(/\bgl_FragColor\b/g, 'gl_FragData[0]');

               const has_output = (source.search(/\bgl_FragData\b/g) != -1);
               const out_list_arr = [];
               if (has_output) {
                  namespace_replace('gl_FragData');

                  const indexable_name = to_namespace('gl_FragData');
                  const out_name = indexable_name + '_out';
                  const outputs = (draw_buffers_enabled ? max_draw_buffers : 1);
                  header.push(`highp vec4 ${indexable_name}[${outputs}];`);
                  header.push(`out highp vec4 ${out_name}[${outputs}];`);

                  const broadcast = (draw_buffers_enabled && has_frag_color);
                  for (let i = 0; i < outputs; i++) {
                     const from_i = (broadcast ? 0 : i);
                     out_list_arr.push(`   ${out_name}[${i}] = ${indexable_name}[${from_i}];`);
                  }
               }
               const out_list = out_list_arr.join('\n');

               source = source.replace(/\bmain\b/g, '_1on2_inner_main');
               source += `
void main() {
   _1on2_inner_main();
${out_list}
}
               `;
            }

            // -

            const parts = header.concat('#line 1', source);
            source = parts.join('\n');

            const DUMP_SHADER_TRANSLATION = false;
            if (DUMP_SHADER_TRANSLATION) {
               console.log(type, '\nBEFORE:');
               console.log(before);
               console.log('\nAFTER:\n');
               console.log(source);
            }

            gl.shaderSource(shader, source);
            arguments[1] = source;
            was.apply(this, arguments);
            gl.shaderSource(shader, before); // Restore it.
         };
      }
   }

   const NOT_IN_WEBGL1 = [
      'beginQuery',
      'beginTransformFeedback',
      'bindBufferBase',
      'bindBufferRange',
      'bindSampler',
      'bindTransformFeedback',
      'bindVertexArray',
      'blitFramebuffer',
      'clearBufferfi',
      'clearBufferfv',
      'clearBufferiv',
      'clearBufferuiv',
      'clearBufferuiv',
      'clientWaitSync',
      'compressedTexImage3D',
      'compressedTexSubImage3D',
      'copyBufferSubData',
      'copyTexSubImage3D',
      'createQuery',
      'createSampler',
      'texImage3D',
      'texSubImage3D',
      'texStorage2D',
      'texStorage3D',
      'framebufferLayer',
   ];

   function hide_webgl2(gl) {
      const undefined_desc = {
         value: undefined,
      };
      for (const k in WebGL2RenderingContext.prototype) {
         if (!(k in WebGLRenderingContext.prototype)) {
            Object.defineProperty(gl, k, undefined_desc);
         }
      }
   }

   prev = HTMLCanvasElement.prototype.getContext;
   prev._foo = true;
   //console.log('prev', prev);
   HTMLCanvasElement.prototype.getContext = function() {
      if (DEBUG_SPEW) {
         console.log('getContext ', ...arguments);
      }

      const as_strict = (REPLACE_WEBGL1 && ['webgl', 'experimental-webgl'].includes(arguments[0]));
      const as_hybrid = (arguments[0] == 'webgl1on2');
      const as_1on2 = (as_strict || as_hybrid);
      if (as_1on2) {
         arguments[0] = 'webgl2';

         if (DEBUG_SPEW) {
            console.log('=> webgl2');
         }
      }

      const ret = prev.apply(this, arguments);
      //console.log('ret', ret);
      if (as_1on2 && ret && !ret._1on2) {
         Object.defineProperty(ret, '_1on2', {
            value: {
               strict: as_strict,
            },
         });
         hook(ret);
         if (as_strict) {
            hide_webgl2(ret);
         }
      }
      return ret;
   };

   console.log('[webgl-1on2] Injected.');
})();

