AFRAME.registerComponent("bowling-balls", {
    init: function () {
        console.log("Before callig throw ball function")
        this.throwBall();
        console.log("After calling throw ball function")
    },
    throwBall: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                console.log("Thrown")
                var ball = document.createElement("a-entity");

                ball.setAttribute("gltf-model", "../assets/models/bowling_ball/scene.gltf");

                ball.setAttribute("scale", { x: 3, y: 3, z: 3 });

                var cam = document.querySelector("#camera");

                pos = cam.getAttribute("position");

                ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y - 1.2,
                    z: pos.z,
                });

                var camera = document.querySelector("#camera").object3D;

                //get the camera direction as Three.js Vector
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);

                //set the velocity and it's direction
                ball.setAttribute("velocity", direction.multiplyScalar(-10));

                var scene = document.querySelector("#scene");

                scene.appendChild(ball);
            }
        });
    },
});

