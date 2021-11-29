/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-bridge', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gft1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
        this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gGrass3', 'assets/level/ground/g-grass-3.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gVine1', 'assets/level/ground/g-vine-a.png');
        this.load.image('gVine2', 'assets/level/ground/g-vine-b.png');
        this.load.image('gVine3', 'assets/level/ground/g-vine-c.png');
        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gMush1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gbox2', 'assets/level/ground/g-box-2.png');


        // Zombie

        this.load.image('gZ15', 'assets/level/zombie/z15.png');
        this.load.image('gZ1', 'assets/level/zombie/z1.png');





        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }


        for(let i=1;i<=3;i++) {
            this.load.image('filterBloody' + i, 'assets/level/filters/bloody/frame' + i + '.png');

        }
        this.loadFrames("filterBloody",3,"assets/level/filters/bloody/frame")
        this.loadFrames("push", 10,"assets/Characters/boy/boy_style_4/PNG/push/Layer-")
        this.loadFrames("idle2", 10,"assets/Characters/boy/boy_style_5/PNG/idle2/Layer-")

        this.loadFrames("walk", 10,"assets/Characters/boy/boy_style_2/PNG/walk/Layer-")
        this.loadFrames("walk", 10,"assets/Characters/boy/boy_style_2/PNG/walk/Layer-")
        this.loadFrames("walki", 10,"assets/Characters/boy/boy_style_2/PNG/idle/Layer-")

        this.loadFrames("monster", 6,"assets/Characters/enemy2/PNG/idle/Layer-")
        this.loadFrames("monster2", 8,"assets/Characters/enemy2/PNG/run/Layer-")
        this.loadFrames("sol", 5,"assets/Characters/enemy 1/PNG/sol/Layer-")

        this.loadFrames("bg-animation-", 3,'assets/level/background-2/bg-animation/bg-animation-')
        this.loadFrames("filterNeige", 5,"assets/level/weather/snow/frame")
        this.loadFrames("filterPluie",3,"assets/level/weather/rain/frame")

    }
    loadFrames(prefix,length,baseUrl){
        for (let i=1;i<=length;i++){
            this.load.image(prefix+i,baseUrl+i+'.png')
        }
    }

    /**
     * Crée la scène

     */
    create() {

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0, 0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container = this.add.container(0, 0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2 = this.add.image(-100, 150, 'bg2-terrain-2').setOrigin(0, 0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain4 = this.add.image(700, 150, 'bg2-terrain-4').setOrigin(0, 0);
        this.bg2Container.add(bg2Terrain4);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2 = this.add.image(420, -50, 'bg2-tree-2').setOrigin(0, 0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle = 0; //pencher l'arbre de -5 degrès
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree3 = this.add.image(700, -50, 'bg2-tree-3').setOrigin(0, 0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle = -9; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container = this.add.container(0, 0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain1 = this.add.image(620, 270, 'bg1-terrain-1').setOrigin(0, 0);
        this.bg1Container.add(bg1terrain1);
        bg1terrain1.scale = 0.6
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain4 = this.add.image(1160, 200, 'bg1-terrain-4').setOrigin(0, 0);
        this.bg1Container.add(bg1terrain4)
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1bridge = this.add.image(960, 260, 'bg1-bridge').setOrigin(0, 0);
        this.bg1Container.add(bg1bridge)
        bg1bridge.angle = -5
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree9 = this.add.image(860, -20, 'bg1-tree-2').setOrigin(0, 0);
        this.bg1Container.add(bg1Tree9);

        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3 = this.add.image(150, -100, 'bg1-tree-3').setOrigin(0, 0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.scale = 0.7
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1 = this.add.image(-10, 0, 'bg1-tree-1').setOrigin(0, 0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale = 0.5
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain3 = this.add.image(-450, 195, 'bg1-terrain-3').setOrigin(0, 0);
        this.bg1Container.add(bg1terrain3);
        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer = this.add.container(0, 0);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let box2 = this.add.image(490, 360, 'gbox2').setOrigin(0, 1);
        this.groundContainer.add(box2);
        box2.scale = 0.6
        box2.angle = 5

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gspike = this.add.image(1570, 550, 'gSpike').setOrigin(0, 1);
        this.groundContainer.add(gspike);
        gspike.scale = 1
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gspike2 = this.add.image(1695, 550, 'gSpike').setOrigin(0, 1);
        this.groundContainer.add(gspike2);
        gspike2.scale = 1
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gStone5 = this.add.image(1101, 360, 'gStone5').setOrigin(0, 1);
        this.groundContainer.add(gStone5);
        gStone5.scale = 1.2

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid4 = this.add.image(946.6, 400, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid4);
        gMid4.angle = -5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gft1 = this.add.image(1550, 270, 'gft1').setOrigin(0, 0);
        this.groundContainer.add(gft1);
        gft1.scale = 0.9
        gft1.angle = 5.5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gtree = this.add.image(1100, -35, 'gTree2').setOrigin(0, 0);
        this.groundContainer.add(gtree);
        gtree.scale = 0.8
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gmush2 = this.add.image(1442, 316, 'gMush1').setOrigin(0, 0);
        this.groundContainer.add(gmush2);
        gmush2.scale = 0.6
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid5 = this.add.image(1150, 350, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid5)
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid6 = this.add.image(1345, 350, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid6)
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let spike = this.add.image(530, 500, 'gSpike')
        this.groundContainer.add(spike)
        spike.scale = 1
        let spike2 = this.add.image(725, 500, 'gSpike')
        this.groundContainer.add(spike2)
        spike2.scale = 1
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let SeaGrass = this.add.image(450, 550, 'gGrass1').setOrigin(0, 1);
        this.groundContainer.add(SeaGrass);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gGrass = this.add.image(1070, 370, 'gGrass2').setOrigin(0, 1);
        this.groundContainer.add(gGrass);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */

        let gGrass2 = this.add.image(1070, 370, 'gGrass2').setOrigin(0, 1);
        this.groundContainer.add(gGrass2);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine20 = this.add.image(1970, 25, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(Vine20);
        Vine20.scale = 0.6
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine21 = this.add.image(1970, 44, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(Vine21);
        Vine21.scale = 0.6
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let vine22 = this.add.image(1972, 70, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(vine22);
        vine22.scale = 0.6
        vine22.angle = -5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let vine23 = this.add.image(1969, 90, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(vine23);
        vine23.scale = 0.6
        vine23.angle = 5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let vine24 = this.add.image(1969, 115, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(vine24);
        vine24.scale = 0.6
        vine24.angle = 0
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let vine25 = this.add.image(1969, 130, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(vine25);
        vine25.scale = 0.6
        vine25.angle = 2
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gGrass3 = this.add.image(1390, 370, 'gGrass2').setOrigin(0, 1);
        this.groundContainer.add(gGrass3);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gGrass5 = this.add.image(1945, 395, 'gGrass2').setOrigin(0, 1);
        this.groundContainer.add(gGrass5);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gGrass4 = this.add.image(1502, 380, 'gGrass3').setOrigin(0, 1);
        this.groundContainer.add(gGrass4);

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let mush1 = this.add.image(150, 360, 'gMush1').setOrigin(0, 1);
        this.groundContainer.add(mush1);
        mush1.flipX = true
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let Vine3 = this.add.image(525, 38, 'gVine3').setOrigin(0, 1);
        this.groundContainer.add(Vine3);
        Vine3.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine1 = this.add.image(525, 65, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(Vine1);
        Vine1.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine2 = this.add.image(532, 100, 'gVine2').setOrigin(0, 1);
        this.groundContainer.add(Vine2);
        Vine2.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine4 = this.add.image(530, 130, 'gVine3').setOrigin(0, 1);
        this.groundContainer.add(Vine4);
        Vine4.scale = 0.8
        Vine4.angle = -5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine7 = this.add.image(574, 25, 'gVine3').setOrigin(0, 1);
        this.groundContainer.add(Vine7);
        Vine7.scale = 0.7
        Vine7.angle = -5
        Vine7.flipX = true
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine8 = this.add.image(575, 50, 'gVine2').setOrigin(0, 1);
        this.groundContainer.add(Vine8);
        Vine8.scale = 0.6
        Vine8.angle = 2
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine9 = this.add.image(576, 70, 'gVine2').setOrigin(0, 1);
        this.groundContainer.add(Vine9);
        Vine9.scale = 0.6
        Vine9.angle = -2
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine10 = this.add.image(572, 100, 'gVine1').setOrigin(0, 1);
        this.groundContainer.add(Vine10);
        Vine10.scale = 0.7
        Vine10.angle = -4

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine5 = this.add.image(533, 160, 'gVine2').setOrigin(0, 1);
        this.groundContainer.add(Vine5);
        Vine5.scale = 0.8
        Vine5.angle = 5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine6 = this.add.image(530, 190, 'gVine3').setOrigin(0, 1);
        this.groundContainer.add(Vine6);
        Vine6.scale = 0.8
        Vine6.angle = -2

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let tree1 = this.add.image(265, 410, 'gTree1').setOrigin(0, 1);
        // tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let water = this.add.image(420, 625, 'gWater').setOrigin(0, 1);
        this.groundContainer.add(water);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1c = this.add.image(755, -75, 'gTree1').setOrigin(0, 0);
        this.groundContainer.add(tree1c);
        tree1c.scale = 0.9
        tree1c.flipX = true
        tree1c.angle = -8;
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2 = this.add.image(0, 450, 'gTree2').setOrigin(0, 1);
        // tree2.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree2);
        tree2.flipX = true
        /**
         * caloou
         * @type {Phaser.GameObjects.Image}
         */
        let gStone = this.add.image(775, 380, 'gStone4').setOrigin(0, 0);
        this.groundContainer.add(gStone);
        gStone.scale = 0.9
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1 = this.add.image(-170, 350, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2 = this.add.image(gMid1.x + gMid1.width, 350, 'gMid').setOrigin(0, 0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft = this.add.image(1900, 380, 'gLeft').setOrigin(0, 0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gLeft);

        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3 = this.add.image(gMid2.x + gMid2.width, 350, 'gRight').setOrigin(0, 0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gright = this.add.image(1400, 350, 'gRight').setOrigin(0, 0);
        this.groundContainer.add(gright);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gstone = this.add.image(1100, 355, 'gStone4').setOrigin(0, 0);
        this.groundContainer.add(gstone);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gstone1 = this.add.image(950, 355, 'gStone4').setOrigin(0, 0);
        this.groundContainer.add(gstone1);
        gstone1.scale = 2
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gbridge = this.add.image(400, 310, 'gBridge').setOrigin(0, 0);
        this.groundContainer.add(gbridge);
        gbridge.scale = 0.8
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gleft = this.add.image(750, 400, 'gLeft').setOrigin(0, 0);
        this.groundContainer.add(gleft);
        gleft.scale = 1.02
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass = this.add.tileSprite(0, 370, gMid3.x + gMid3.width - 40, 50, 'g-grass-1').setOrigin(0, 1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2 = this.add.tileSprite(0, 370, gMid3.x + gMid3.width - 40, 50, 'g-grass-3').setOrigin(0, 1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key: 'filterBloody1'},
                {key: 'filterBloody2'},
                {key: 'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('bloody');

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBoy = this.add.sprite(1430, 205  , 'push').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'push',
            frames: this.getFrames('push',10),
            frameRate: 7,
            repeat: -1
        });
        this.filterBoy.play('push');
        this.filterBoy.scale = 0.4
        this.filterBoy.setVisible(true)
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBoyWalk = this.add.sprite(510, 215  , 'walk').setOrigin(0, 0);
        this.filterBoyWalk
        //animation de 3 images
        this.anims.create({
            key: 'walk',
            frames: this.getFrames('walk',10),
            frameRate: 14,
            repeat: -1
        });
        this.filterBoyWalk.play('walk');
        this.filterBoyWalk.scale = 0.4
        this.filterBoyWalk.setVisible(true)


        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterMonster = this.add.sprite(1440, 250  , 'monster').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'monster',
            frames: this.getFrames('monster',6),
            frameRate: 16,
            repeat: -1
        });
        this.filterMonster.play('monster');
        this.filterMonster.scale = 0.2
        this.filterMonster.setVisible(true)
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterMonster2 = this.add.sprite(1440, 0   , 'monster2').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'monster2',
            frames: this.getFrames('monster2',6),
            frameRate: 16,
            repeat: -1
        });
        this.filterMonster2.play('monster2');
        this.filterMonster2.scale = 0.4
        this.filterMonster2.setVisible(true)
        this.filterMonster2.flipX = true

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterSol = this.add.sprite(1650, 330 , 'sol').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'monstresol',
            frames: this.getFrames('sol',5),
            frameRate: 5,
            repeat: -1
        });
        this.filterSol.play('monstresol');
        this.filterSol.scale = 0.4
        this.filterSol.setVisible(true)

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.tweens.add({
            targets: this.filterMonster2,
                x: 700,
                duration: 3000,
                ease: Phaser.Math.Easing.Sine.InOut,
                yoyo: true,
                delay: 1000,
                repeat: -1,
                flipX:true
        });




        this.filterwalki = this.add.sprite(510, 215  , 'walki').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'walki',
            frames: this.getFrames('walki',6),
            frameRate: 16,
            repeat: -1
        });
        this.filterwalki.play('walki');
        this.filterwalki.scale = 0.4
        this.filterwalki.setVisible(true)

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterboy2 = this.add.sprite(450, 170, 'idle2').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'idle2',
            frames: this.getFrames('idle2',10),
            frameRate: 8,
            repeat: -1
        });
        this.filterboy2.scale = 0.4
        this.filterboy2.setVisible(false)


        for (let i = 1; i <= 5; i++) {
            this.filterboy2.setVisible(true)
            this.filterboy2.play('idle2');

        }



        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterNeige = this.add.sprite(0, 0, 'filterNeige').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'neige',
            frames: [
                {key: 'filterNeige1'},
                {key: 'filterNeige2'},
                {key: 'filterNeige3'},
                {key: 'filterNeige4'},
                {key: 'filterNeige5'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterNeige.play('neige');

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterPluie = this.add.sprite(0, 0, 'filterPluie').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'pluie',
            frames: [
                {key: 'filterPluie1'},
                {key: 'filterPluie2'},
                {key: 'filterPluie3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterPluie.play('pluie');
        this.filterPluie.setVisible(false)

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed = 0;
        this.speedmonster = 0 ;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);

        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX = 0;
        this.filterBloody.scrollFactorX = 0;
        this.filterNeige.scrollFactorX = 0;
        this.filterPluie.scrollFactorX = 0;
        this.bg2Container.scrollFactorX = 0.2;
        this.bg1Container.scrollFactorX = 0.4;
        this.groundContainer.scrollFactorX = 1;
        this.filterBoyWalk.setVisible(false)

    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }


    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.filterPluie.visible == true) {
                        me.filterPluie.setVisible(false)

                    }
                    else  {
                        me.filterNeige.setVisible(false)
                        me.filterPluie.visible = true;

                        }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (me.filterNeige.visible == true) {
                        me.filterNeige.setVisible(false)
                    }
                    else  {
                        me.filterPluie.setVisible(false)
                        me.filterNeige.visible = true;
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.filterNeige.setVisible(false)
                    me.filterPluie.setVisible(false)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.filterwalki.setVisible(false)
                    me.filterBoyWalk.setVisible(true)
                    me.filterBoyWalk.flipX = false
                    me.filterwalki.flipX = false
                    me.speedmonster = 5
                    me.filterBoyWalk.x += 5;
                    me.filterwalki.x += 5
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.filterBoyWalk.setVisible(true)
                    me.filterwalki.setVisible(false)
                    me.filterBoyWalk.flipX = 1
                    me.filterwalki.flipX = 1
                    me.speedmonster = 5
                    me.filterwalki.x += -5;
                    me.filterBoyWalk.x += -5;
                    break;


            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.filterwalki.setVisible(true)
                    me.filterBoyWalk.setVisible(false)
            }







        });

    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;


        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterBloody.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
