import petal1 from '../assets/petal-1.png'
import petal2 from '../assets/petal-2.png'
import petal3 from '../assets/petal-3.png'

const PETALS = [
  { src: petal1, left: '7%',  size: 36, delay: 0,    fall: 18, sway: 5.5 },
  { src: petal3, left: '22%', size: 30, delay: 4.0,  fall: 22, sway: 6.8 },
  { src: petal2, left: '40%', size: 40, delay: 1.5,  fall: 16, sway: 5.0 },
  { src: petal1, left: '58%', size: 32, delay: 7.0,  fall: 20, sway: 7.2 },
  { src: petal3, left: '73%', size: 38, delay: 2.8,  fall: 19, sway: 5.8 },
  { src: petal2, left: '88%', size: 28, delay: 10.0, fall: 17, sway: 6.0 },
  { src: petal1, left: '50%', size: 34, delay: 13.5, fall: 21, sway: 6.4 },
]

const FallingPetals = () => (
  <div
    className="fixed inset-0 top-20 pointer-events-none z-[2] overflow-hidden"
    aria-hidden="true"
  >
    {PETALS.map((p, i) => (
      <div
        key={i}
        className="absolute top-0"
        style={{
          left: p.left,
          animation: `petal-sway ${p.sway}s ease-in-out ${p.delay}s infinite alternate`,
        }}
      >
        <img
          src={p.src}
          alt=""
          width={p.size}
          height={p.size}
          className="select-none [image-rendering:pixelated]"
          style={{
            animation: `petal-fall ${p.fall}s linear ${p.delay}s infinite`,
          }}
        />
      </div>
    ))}
  </div>
)

export default FallingPetals
