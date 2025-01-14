(()=>{let canvasGL,gl,texture;self.onmessage=event=>{if(self.postMessage("worker-ready"),"canvas"in event.data){if(canvasGL=event.data.canvas,gl=canvasGL.getContext("webgl")||canvasGL.getContext("experimental-webgl"),!gl)return void console.error("WebGL not supported");initWebGL()}else if("pixels"in event.data){var _gl;const{pixels,rows,cols}=event.data;canvasGL.width=cols,canvasGL.height=rows,null===(_gl=gl)||void 0===_gl||_gl.viewport(0,0,cols,rows),updateTexture(pixels,rows,cols)}};const initWebGL=()=>{const vertexShader=createShader(gl.VERTEX_SHADER,"\n    attribute vec2 a_position;\n    attribute vec2 a_texCoord;\n    varying vec2 v_texCoord;\n    void main() {\n      gl_Position = vec4(a_position, 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "),fragmentShader=createShader(gl.FRAGMENT_SHADER,"\n    precision mediump float;\n    varying vec2 v_texCoord;\n    uniform sampler2D u_texture;\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_texCoord);\n    }\n  "),program=createProgram(vertexShader,fragmentShader);if(gl.useProgram(program),!program)return void console.error("Failed to create WebGL program");const positionLocation=gl.getAttribLocation(program,"a_position"),texCoordLocation=gl.getAttribLocation(program,"a_texCoord"),positionBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer),gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const texCoordBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuffer),gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,1,1,1,0,0,0,0,1,1,1,0]),gl.STATIC_DRAW),texture=gl.createTexture(),gl.bindTexture(gl.TEXTURE_2D,texture),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST),gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer),gl.enableVertexAttribArray(positionLocation),gl.vertexAttribPointer(positionLocation,2,gl.FLOAT,!1,0,0),gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuffer),gl.enableVertexAttribArray(texCoordLocation),gl.vertexAttribPointer(texCoordLocation,2,gl.FLOAT,!1,0,0)},createShader=(type,source)=>{const shader=gl.createShader(type);return shader?(gl.shaderSource(shader,source),gl.compileShader(shader),gl.getShaderParameter(shader,gl.COMPILE_STATUS)?shader:(console.error("Error compiling shader:",gl.getShaderInfoLog(shader)),gl.deleteShader(shader),null)):(console.error("Error creating shader"),null)},createProgram=(vertexShader,fragmentShader)=>{const program=gl.createProgram();return gl.attachShader(program,vertexShader),gl.attachShader(program,fragmentShader),gl.linkProgram(program),gl.getProgramParameter(program,gl.LINK_STATUS)?program:(console.error("Error linking program:",gl.getProgramInfoLog(program)),gl.deleteProgram(program),null)},updateTexture=(pixels,rows,cols)=>{gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,cols,rows,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array(pixels.flatMap((p=>[p.r,p.g,p.b,255])))),gl.clear(gl.COLOR_BUFFER_BIT),gl.drawArrays(gl.TRIANGLES,0,6)}})();