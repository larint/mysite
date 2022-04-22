import { useEffect, useRef, useState } from "react"

const Clock = (props) => {
    const { size, timeFormat, hourFormat } = props
    const clockCanvas = useRef()
    const [time, setTime] = useState(new Date())
    // const state = { time: new Date() }
    let radius = size / 2
    let drawingContext = null
    const draw24hour = timeFormat.toLowerCase().trim() === "24hour"
    const drawRoman = draw24hour && hourFormat.toLowerCase().trim() === "roman"
    let timerId = null

    useEffect(() => {
        getDrawingContext()
        timerId = setInterval(() => tick(), 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])


    const getDrawingContext = () => {
        drawingContext = clockCanvas.current.getContext('2d')
        drawingContext.translate(radius, radius)
        radius *= 0.9
    }

    const tick = () => {
        setTime(new Date())
        const rad = radius
        let ctx = drawingContext
        drawFace(ctx, rad)
        drawNumbers(ctx, rad)
        drawTicks(ctx, rad)
        drawTime(ctx, rad)
    }

    const drawFace = (ctx, radius) => {
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, 2 * Math.PI)
        ctx.fillStyle = "white"
        ctx.fill()

        const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
        grad.addColorStop(0, "#333")
        grad.addColorStop(0.5, "white")
        grad.addColorStop(1, "#333")
        ctx.strokeStyle = grad
        ctx.lineWidth = radius * 0.1
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI)
        ctx.fillStyle = "#333"
        ctx.fill()
    }

    const drawNumbers = (ctx, radius) => {
        const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
        const fontBig = radius * 0.15 + "px Arial"
        const fontSmall = radius * 0.075 + "px Arial"
        let ang, num;

        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        for (let num = 1; num < 13; num++) {
            ang = num * Math.PI / 6
            ctx.rotate(ang)
            ctx.translate(0, -radius * 0.78)
            ctx.rotate(-ang)
            ctx.font = fontBig
            ctx.fillStyle = "black"
            ctx.fillText(drawRoman ? romans[num - 1] : num.toString(), 0, 0)
            ctx.rotate(ang)
            ctx.translate(0, radius * 0.78)
            ctx.rotate(-ang)

            // Draw inner numerals for 24 hour time format
            if (draw24hour) {
                ctx.rotate(ang)
                ctx.translate(0, -radius * 0.60)
                ctx.rotate(-ang)
                ctx.font = fontSmall
                ctx.fillStyle = "red"
                ctx.fillText((num + 12).toString(), 0, 0)
                ctx.rotate(ang)
                ctx.translate(0, radius * 0.60)
                ctx.rotate(-ang)
            }
        }

        // Write author text
        ctx.font = fontSmall
        ctx.fillStyle = "#3D3B3D"
        ctx.translate(0, radius * 0.30)
        ctx.fillText((new Date()).toLocaleTimeString(), 0, 0)
        ctx.fillText((new Date()).toLocaleDateString(), 0, -80)
        ctx.translate(0, -radius * 0.30)
    }

    const drawTicks = (ctx, radius) => {
        let numTicks, tickAng, tickX, tickY

        for (numTicks = 0; numTicks < 60; numTicks++) {

            tickAng = (numTicks * Math.PI / 30)
            tickX = radius * Math.sin(tickAng)
            tickY = -radius * Math.cos(tickAng)

            ctx.beginPath()
            ctx.lineWidth = radius * 0.010
            ctx.moveTo(tickX, tickY)
            if (numTicks % 5 === 0) {
                ctx.lineTo(tickX * 0.88, tickY * 0.88)
            } else {
                ctx.lineTo(tickX * 0.92, tickY * 0.92)
            }
            ctx.stroke()
        }
    }

    const drawTime = (ctx, radius) => {
        const now = new Date()
        let hour = now.getHours()
        let minute = now.getMinutes()
        let second = now.getSeconds()

        // hour
        hour %= 12
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60))
        drawHand(ctx, hour, radius * 0.5, radius * 0.05)
        // minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
        drawHand(ctx, minute, radius * 0.8, radius * 0.05)
        // second
        second = (second * Math.PI / 30)
        drawHand(ctx, second, radius * 0.9, radius * 0.02, "red")
    }

    const drawHand = (ctx, position, length, width, color) => {
        color = color || "black"
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap = "round"
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.moveTo(0, 0)
        ctx.rotate(position)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-position)
    }

    return (
        <div className="Clock" style={{ width: size + 'px' }}>
            <canvas width={size} height={size} ref={clockCanvas} />
        </div>
    )
}

export default Clock