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
        //ground (premier plan noir)
        this.load.image('gft1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
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
        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++) {
            this.load.image('filterFilm' + i, 'assets/level/filters/film/frame-' + i + '.png');

        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain4=this.add.image(700,150, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(420,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=0; //pencher l'arbre de -5 degrès
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree3=this.add.image(700,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-9; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain1=this.add.image(620,270, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1terrain1);
        bg1terrain1.scale = 0.6
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree9=this.add.image(860,-20  , 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree9);

        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3=this.add.image(150,-100, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.scale = 0.7
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-10,0, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale = 0.5
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain3=this.add.image(-450,195, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1terrain3);
        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let box2=this.add.image(490,360, 'gbox2').setOrigin(0,1);
        this.groundContainer.add(box2);
        box2.scale = 0.6
        box2.angle = 5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gStone5=this.add.image(1101,360, 'gStone5').setOrigin(0,1);
        this.groundContainer.add(gStone5);
        gStone5.scale = 1.2

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid4=this.add.image(946.6,400, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        gMid4.angle = -5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gft1=this.add.image(1550,270, 'gft1').setOrigin(0,0);
        this.groundContainer.add(gft1);
        gft1.scale = 0.9
        gft1.angle = 5.5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gtree=this.add.image(1100,-35, 'gTree2').setOrigin(0,0);
        this.groundContainer.add(gtree);
        gtree.scale = 0.8
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gmush2=this.add.image(1442,316, 'gMush1').setOrigin(0,0);
        this.groundContainer.add(gmush2);
        gmush2.scale = 0.6
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid5=this.add.image(1150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5)
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let gMid6=this.add.image(1345,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6)
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let spike=this.add.image(530,500,'gSpike')
        this.groundContainer.add(spike)
        spike.scale=1
        let spike2=this.add.image(725,500,'gSpike')
        this.groundContainer.add(spike2)
        spike2.scale=1
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let SeaGrass=this.add.image(450,550, 'gGrass1').setOrigin(0,1);
        this.groundContainer.add(SeaGrass);
        SeaGrass.scale = 2
        SeaGrass.flipX = true
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let mush1=this.add.image(150,360, 'gMush1').setOrigin(0,1);
        this.groundContainer.add(mush1);
        mush1.flipX = true
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let Vine3 =this.add.image(525,38, 'gVine3').setOrigin(0,1);
        this.groundContainer.add(Vine3);
        Vine3.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine1 =this.add.image(525,65, 'gVine1').setOrigin(0,1);
        this.groundContainer.add(Vine1);
        Vine1.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine2 =this.add.image(532,100, 'gVine2').setOrigin(0,1);
        this.groundContainer.add(Vine2);
        Vine2.scale = 0.8
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine4 =this.add.image(530,130, 'gVine3').setOrigin(0,1);
        this.groundContainer.add(Vine4);
        Vine4.scale = 0.8
        Vine4.angle = -5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine7 =this.add.image(574,25, 'gVine3').setOrigin(0,1);
        this.groundContainer.add(Vine7);
        Vine7.scale = 0.7
        Vine7.angle = -5
        Vine7.flipX = true
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine8 =this.add.image(575,50, 'gVine2').setOrigin(0,1);
        this.groundContainer.add(Vine8);
        Vine8.scale = 0.6
        Vine8.angle = 2
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine9 =this.add.image(576,70, 'gVine2').setOrigin(0,1);
        this.groundContainer.add(Vine9);
        Vine9.scale = 0.6
        Vine9.angle = -2
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine10 =this.add.image(572,100, 'gVine1').setOrigin(0,1);
        this.groundContainer.add(Vine10);
        Vine10.scale = 0.7
        Vine10.angle = -4

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine5 =this.add.image(533,160, 'gVine2').setOrigin(0,1);
        this.groundContainer.add(Vine5);
        Vine5.scale = 0.8
        Vine5.angle = 5
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let Vine6 =this.add.image(530,190, 'gVine3').setOrigin(0,1);
        this.groundContainer.add(Vine6);
        Vine6.scale = 0.8
        Vine6.angle = -2

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let tree1=this.add.image(265,410, 'gTree1').setOrigin(0,1);
       // tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let water=this.add.image(420,625, 'gWater').setOrigin(0,1);
        this.groundContainer.add(water);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1c=this.add.image(755,-75, 'gTree1').setOrigin(0,0);
        this.groundContainer.add(tree1c);
        tree1c.scale = 0.9
        tree1c.flipX = true
        tree1c.angle=-8 ;
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(0,450, 'gTree2').setOrigin(0,1);
        // tree2.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree2);
        tree2.flipX = true
        /**
         * caloou
         * @type {Phaser.GameObjects.Image}
         */
        let gStone=this.add.image(775,380, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone);
        gStone.scale = 0.9
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-170,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft=this.add.image(1900,380, 'gLeft').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gLeft);

        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gright=this.add.image(1400,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gright);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gstone=this.add.image(1100,355, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gstone);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gstone1=this.add.image(950,355, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gstone1);
        gstone1.scale = 2
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gbridge=this.add.image(400,310, 'gBridge').setOrigin(0,0);
        this.groundContainer.add(gbridge);
        gbridge.scale = 0.8
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gleft=this.add.image(750,400, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gleft);
        gleft.scale = 1.02
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
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
                    me.speed=20;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-20;
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
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
