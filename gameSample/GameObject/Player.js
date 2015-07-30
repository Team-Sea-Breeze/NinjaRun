var Player = (function (parent) {
    var Player = {};

    var CONSTS = {
        SCREEN_WIDTH: 640,
        SCREEN_HEIGHT: 480
    };

    Player.init = function (x, y, w, h) {

        parent.init.call(Player, x, y, w, h);
        Player.Key = {
            _pressed: {},
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32,

            isDown: function (keyCode) {
                return this._pressed[keyCode];
            },

            onKeyDown: function (e) {
                this._pressed[e.keyCode] = true;
            },

            onKeyUp: function (e) {
                Player.isRunning = false;
                delete this._pressed[e.keyCode];
            }
        };

        this.collisionDirection = '';

        return this;
    };

    Player.update = function () {
        var velocityX = this.runVel,
            velocityY = 10;


        window.addEventListener('keyup', function (e) {
            Player.Key.onKeyUp(e);
        }, false);

        window.addEventListener('keydown', function (e) {
            Player.Key.onKeyDown(e);
        }, false);


        function animateLeft() {
            Player.x -= velocityX;
        }
        function animateUp() {
            Player.y -= velocityY;
        }
        function animateRight() {
            Player.x += velocityX;
        }
        function animateDown() {
            Player.y += velocityY;
        }

        function animateJump() {

        }

        if (Player.Key.isDown(Player.Key.UP) && this.collisionDirection.indexOf('top') == -1) {
            animateUp()
        }
        if (Player.Key.isDown(Player.Key.LEFT) && this.collisionDirection.indexOf('left') == -1) {
            Player.isRunning = true;
            animateLeft()
        }
        if (Player.Key.isDown(Player.Key.RIGHT) && this.collisionDirection.indexOf('right') == -1) {
            Player.isRunning = true;
            animateRight()
        }
        if (Player.Key.isDown(Player.Key.DOWN)) {
            animateDown()
        }
        if (Player.Key.isDown(Player.Key.SPACE) && Player.grounded == true) {
            jumpSound.playclip();
            this.grounded = false;
            this.hasJumped = true;
            this.startJumping = true;
        }
        if(this.startJumping)
        {
            parent.jump.call(this);
        }

        if(this.collisionDirection.indexOf('bot') == -1)
        {
            parent.gravity.call(this);
        }

        if (this.collisionDirection.indexOf('bot') !== -1) {
            this.grounded = true;
        }
        parent.accelerate.call(this);
    };


    return Player;
})(Character);
