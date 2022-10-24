let content = 'stella is a frontend developer.';
var text;
let angle = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1000");
  canvas.elt.style.position = "fixed";
  canvas.style("top", "0");
  canvas.style("left", "0");
  angleMode(DEGREES);
}

function draw() {
    translate(10, 20);
    scale(0.25);
    strokeWeight(3);
    noFill();
    stroke(mouseX,200,mouseY);
    beginShape();
        vertex(259, 242) 
        vertex(266, 228) 
        vertex(290, 222) 
        vertex(305, 222) 
        vertex(310, 222) 
        vertex(324, 235) 
        vertex(326, 250) 
        vertex(322, 265) 
        vertex(308, 278) 
        vertex(291, 285) 
        vertex(276, 283) 
        vertex(263, 270) 
        vertex(259, 249)
    endShape();
    
    beginShape();
        vertex(378, 229) 
        vertex(400, 215) 
        vertex(427, 216) 
        vertex(437, 220) 
        vertex(442, 229) 
        vertex(443, 260) 
        vertex(440, 269) 
        vertex(417, 275) 
        vertex(399, 276) 
        vertex(381, 258) 
        vertex(378, 237)
    endShape();
    
    beginShape();
        vertex(250, 225) 
        vertex(271, 214) 
        vertex(307, 212)
        vertex(331, 219) 
        vertex(337, 222) 
        vertex(368, 221) 
        vertex(398, 206) 
        vertex(427, 207) 
        vertex(445, 213) 
        vertex(455, 218) 
        vertex(457, 227) 
        vertex(451, 231) 
        vertex(448, 265) 
        vertex(436, 281) 
        vertex(410, 285)
        vertex(388, 282) 
        vertex(371, 261) 
        vertex(368, 241) 
        vertex(367, 233) 
        vertex(338, 232) 
        vertex(325, 273) 
        vertex(314, 287) 
        vertex(296, 294) 
        vertex(269, 288) 
        vertex(255, 269) 
        vertex(250, 238)
    endShape();
    
    beginShape();
        vertex(175, 283) 
        vertex(153, 269) 
        vertex(135, 271) 
        vertex(122, 296) 
        vertex(164, 358) 
        vertex(185, 360) 
    endShape();
    
    beginShape();
        vertex(189, 367) 
        vertex(189, 420) 
        vertex(166, 456) 
        vertex(148, 472) 
    endShape();
    
    beginShape();
        vertex(311, 48) 
        vertex(345, 92) 
    endShape();
    
    
    beginShape();
        vertex(433, 206) 
        vertex(438, 181) 
        vertex(418, 134) 
        vertex(407, 104) 
        vertex(399, 87) 
        vertex(354, 61) 
        vertex(313, 47) 
        vertex(277, 37) 
        vertex(186, 78) 
        vertex(133, 139) 
        vertex(125, 193) 
        vertex(125, 284) 
    endShape();
    
    beginShape();
        vertex(188, 236) 
        vertex(217, 185) 
        vertex(249, 141) 
        vertex(279, 115) 
        vertex(345, 97) 
        vertex(383, 117) 
        vertex(416, 178) 
        vertex(428, 205) 
    endShape();
    
    beginShape();
        vertex(190, 266) 
        vertex(194, 357) 
        vertex(229, 413) 
        vertex(310, 448) 
        vertex(375, 448) 
        vertex(424, 389) 
        vertex(439, 322) 
        vertex(440, 286) 
    endShape();
    
    beginShape();
        vertex(293, 191) 
        vertex(310, 207) 
        vertex(272, 211) 
        vertex(241, 220) 
        vertex(224, 207) 
        vertex(256, 192) 
        vertex(293, 190) 
    endShape();
    
    beginShape();
        vertex(410, 186) 
        vertex(403, 185) 
        vertex(378, 200) 
        vertex(371, 210) 
        vertex(397, 204) 
        vertex(418, 198) 
    endShape();
    
    beginShape();
        vertex(268, 243) 
        vertex(274, 234) 
        vertex(298, 235) 
        vertex(315, 241) 
        vertex(299, 250) 
        vertex(277, 252) 
        vertex(265, 246)
    endShape();
    
    beginShape();
        vertex(385, 235) 
        vertex(407, 226) 
        vertex(425, 232) 
        vertex(406, 247) 
        vertex(386, 236) 
    endShape();
    
    beginShape();
        vertex(341, 259) 
        vertex(339, 293) 
        vertex(326, 304) 
        vertex(322, 319) 
        vertex(329, 328) 
        vertex(334, 318) 
        vertex(361, 322) 
        vertex(366, 316) 
        vertex(377, 314) 
        vertex(383, 320) 
        vertex(389, 318) 
        vertex(388, 307) 
    endShape();
    
    beginShape();
        // stroke(mouseX, mouseY, 150)
        vertex(319, 359) 
        vertex(342, 348) 
        vertex(353, 356) 
        vertex(372, 352) 
        vertex(387, 356) 
        vertex(380, 377) 
        vertex(340, 381) 
        vertex(307, 365)
    endShape();
    
    
    beginShape();
        vertex(380, 360) 
        vertex(357, 370) 
        vertex(327, 364)
    endShape();
    
    // stroke(255, 91, 214);
    beginShape();
        vertex(173, 248) 
        vertex(241, 226)
    endShape();
    
    beginShape();
        vertex(178, 259) 
        vertex(248, 239) 
    endShape();
    
    // stroke(255)
    
    beginShape();
        vertex(120, 246) 
        vertex(103, 247) 
        vertex(86, 284) 
        vertex(109, 323) 
    endShape();
    
    beginShape();
        vertex(125, 298) 
        vertex(113, 323) 
        vertex(119, 347) 
        vertex(135, 361) 
        vertex(153, 357) 
    endShape();
    
    beginShape();
        vertex(130, 311) 
        vertex(133, 361) 
    endShape();
}
