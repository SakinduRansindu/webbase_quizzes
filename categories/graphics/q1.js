export default [
{
question: "Which of the following best describes the primary difference between raster and vector graphics?",
code: "",
choices: [
"Raster graphics use pixels, while vector graphics use mathematical equations.",
"Raster graphics are always black and white, while vector graphics are always colored.",
"Vector graphics cannot be resized without losing quality, while raster graphics can.",
"Raster graphics are used only for web, while vector graphics are used only for print."
],
correct: 0,
justification: "Raster graphics are composed of pixels arranged in a grid, each with a specific color value, while vector graphics are based on mathematical equations defining shapes and lines. Vector graphics can be resized without loss of quality, unlike raster graphics which can become pixelated when scaled up."
},
{
question: "In the animation pipeline, which stage comes immediately after 'Modeling'?",
code: "",
choices: [
"Rigging",
"Storyboarding",
"Lighting & Rendering",
"Compositing & Editing"
],
correct: 0,
justification: "After 'Modeling', the next stage is 'Rigging', where the digital skeleton and control system are created to allow models to move realistically. 'Storyboarding' comes before modeling, and 'Lighting & Rendering' and 'Compositing & Editing' come later in the pipeline."
},
{
question: "What is the main advantage of Bresenham's line algorithm over the DDA algorithm?",
code: "",
choices: [
"It uses only integer calculations, making it faster.",
"It produces smoother lines than DDA.",
"It can only draw vertical lines.",
"It is easier to implement than the direct line equation method."
],
correct: 0,
justification: "Bresenham's line algorithm is faster than DDA because it uses only integer arithmetic, avoiding floating-point operations and rounding errors. While DDA is faster than the direct method, it still involves floating-point calculations."
},
{
question: "Which principle of animation prepares the audience for a major movement and makes actions more readable?",
code: "",
choices: [
"Anticipation",
"Staging",
"Exaggeration",
"Arc"
],
correct: 0,
justification: "Anticipation is the principle that prepares the audience for a major movement, making actions more readable and preventing movements from feeling sudden or jarring. Staging directs attention, exaggeration overemphasizes, and arc refers to natural motion paths."
},
{
question: "In computer graphics, what is the purpose of the framebuffer?",
code: "",
choices: [
"To store the final rendered image before display",
"To process lighting calculations",
"To handle user input",
"To compress image files"
],
correct: 0,
justification: "The framebuffer is a dedicated memory buffer that holds the final rendered image before it is displayed on the screen. It does not process lighting, handle input, or compress files."
},
{
question: "Which of the following is NOT a step in the traditional graphics pipeline?",
code: "",
choices: [
"Morphing",
"Transformation",
"Lighting",
"Scan conversion"
],
correct: 0,
justification: "Morphing is not part of the traditional graphics pipeline. The pipeline typically includes transformation, lighting, clipping, scan conversion (rasterization), and pixel processing."
},
{
question: "What is the main function of the GPU in graphics hardware?",
code: "",
choices: [
"To perform parallel processing for rendering images",
"To store textures and frame data",
"To control the monitor's refresh rate",
"To handle user input devices"
],
correct: 0,
justification: "The GPU (Graphics Processing Unit) is designed for parallel processing to render images efficiently. VRAM stores data, but the GPU handles computation. Refresh rates are controlled by the display and video controller, while input is handled by separate devices."
},
{
question: "Which animation principle involves adding secondary movements that support the main action without distracting from it?",
code: "",
choices: [
"Secondary Action",
"Follow Through",
"Solid Drawing",
"Timing"
],
correct: 0,
justification: "Secondary Action adds depth to the main action, supporting it without distracting from it. Follow Through refers to parts moving after the main action, Solid Drawing is about form and perspective, and Timing controls speed and rhythm."
},
{
question: "What is the bit depth required to display 256 possible colors in a raster image?",
code: "",
choices: [
"8 bits per pixel",
"1 bit per pixel",
"16 bits per pixel",
"24 bits per pixel"
],
correct: 0,
justification: "8 bits per pixel allow for 256 (2^8) possible color values. 1 bit allows only 2 colors, 16 bits allow 65,536 colors, and 24 bits allow over 16 million colors."
},
{
question: "Which display technology is known for higher contrast and better colors, and is used in premium devices?",
code: "",
choices: [
"OLED",
"LCD",
"CRT",
"Dot Matrix"
],
correct: 0,
justification: "OLED (Organic Light-Emitting Diode) displays are known for higher contrast and better colors compared to LCDs and CRTs, and are commonly used in premium devices. Dot Matrix is a printer technology, not a display."
}
]
