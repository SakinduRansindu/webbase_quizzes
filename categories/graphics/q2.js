export default [
{
question: "Which of the following is a key difference between raster and vector graphics?",
code: "",
choices: [
"Raster graphics are pixel-based, while vector graphics use mathematical equations.",
"Raster graphics can be resized without quality loss, while vector graphics cannot.",
"Vector graphics are only used for photographs, while raster graphics are used for logos.",
"Raster graphics use geometric primitives, while vector graphics use pixels."
],
correct: 0,
justification: "Raster graphics are composed of pixels, making them resolution-dependent, while vector graphics use mathematical equations, allowing them to be scaled without loss of quality. The other options confuse the characteristics or applications of each type."
},
{
question: "What is the primary function of the framebuffer in computer graphics hardware?",
code: "",
choices: [
"To store the final rendered image before it is displayed",
"To perform lighting calculations",
"To process user input",
"To compress image files"
],
correct: 0,
justification: "The framebuffer is a dedicated memory buffer that holds the final rendered image before it is displayed on the screen. It does not perform lighting calculations, process input, or compress files."
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
justification: "Morphing is not part of the traditional graphics pipeline, which typically includes transformation, lighting, clipping, scan conversion (rasterization), and pixel processing."
},
{
question: "Which animation principle involves preparing the audience for a major movement?",
code: "",
choices: [
"Anticipation",
"Staging",
"Exaggeration",
"Arc"
],
correct: 0,
justification: "Anticipation prepares the viewer for a major movement, making actions more readable and realistic. Staging directs attention, exaggeration overemphasizes, and arc refers to natural motion paths."
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
justification: "Bresenham's line algorithm is faster than DDA because it uses only integer arithmetic, avoiding floating-point operations and rounding errors. DDA is faster than the direct method, but still involves floating-point calculations."
},
{
question: "Which of the following is a benefit of using a color lookup framebuffer over a direct color framebuffer?",
code: "",
choices: [
"It reduces the amount of memory required to store images.",
"It increases the number of colors that can be displayed.",
"It eliminates the need for a DAC (Digital-to-Analog Converter).",
"It allows for higher screen resolutions."
],
correct: 0,
justification: "Color lookup framebuffers store indices instead of full color values, reducing memory requirements. Direct color framebuffers store full color information, which uses more memory."
},
{
question: "Which principle of animation adds depth to the main action without distracting from it?",
code: "",
choices: [
"Secondary Action",
"Follow Through",
"Solid Drawing",
"Timing"
],
correct: 0,
justification: "Secondary Action supports the main action, adding richness without distracting from it. Follow Through refers to parts moving after the main action, Solid Drawing is about form and perspective, and Timing controls speed and rhythm."
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
},
{
question: "Which of the following is a key feature of vector graphics?",
code: "",
choices: [
"They can be resized without losing quality.",
"They are always black and white.",
"They are stored as bitmaps.",
"They cannot represent curves."
],
correct: 0,
justification: "Vector graphics use mathematical equations to define shapes, allowing them to be resized without losing quality. They are not limited to black and white, are not stored as bitmaps, and can represent curves."
}
]
