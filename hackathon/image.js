
window.onload = choosePic;

var myPix = new Array("https://cdn.discordapp.com/attachments/1028382190284849285/1031138317653245972/00d8f10f-5038-4e0f-bb58-0b885ddc0cc5___RS_Early.B_8722.JPG",
"https://cdn.discordapp.com/attachments/1028382190284849285/1031138317913305118/0a8a68ee-f587-4dea-beec-79d02e7d3fa4___RS_Early.B_8461.JPG",
"https://cdn.discordapp.com/attachments/1028382190284849285/1031138318265622640/00fc2ee5-729f-4757-8aeb-65c3355874f2___RS_HL_1864.JPG",
"https://cdn.discordapp.com/attachments/1028382190284849285/1031138318588588122/1ab62af3-c0a5-4fab-bb62-e06d6f7ddb59___RS_LB_2908.JPG",
"https://cdn.discordapp.com/attachments/1028382190284849285/1031138318974451772/3f2d7c62-8d58-4a40-9df4-0ab3497b13b9___RS_LB_4487.JPG");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}