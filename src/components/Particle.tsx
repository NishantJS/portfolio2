import Particles from 'react-tsparticles';

const Particle = (): JSX.Element => (
  <Particles
    params={{
      "autoPlay": true,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onHover": {
            "enable": true,
            "mode": "grab",
            "parallax": {
              "enable": true,
              "force": 60,
              "smooth": 10
            }
          }
        },
        "modes": {
          "grab": {
            "distance": 400,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
        }
      },
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true
        }
      },
      "particles": {
        "color": {
          "value": "#7878ff"
        },
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50
          },
          "outModes": {
            "default": "bounce",
            "bottom": "bounce-vertical",
            "left": "bounce-horizontal",
            "right": "bounce-horizontal",
            "top": "bounce-vertical"
          },
          "random": false,
          "size": false,
          "speed": 2,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "vibrate": false
        },
        "number": {
          "density": {
            "enable": true,
            "area": 800,
            "factor": 1000
          },
          "limit": 0,
          "value": 100
        },
        "opacity": {
          "random": {
            "enable": true,
            "minimumValue": 0.1
          },
          "value": {
            "min": 0.1,
            "max": 0.5
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 3,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
        "size": {
          "random": {
            "enable": true,
            "minimumValue": 1
          },
          "value": {
            "min": 0.1,
            "max": 10
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 20,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.1
          }
        },
      },
    }
  }

    className="bg_particle"
  />
)


export default Particle
