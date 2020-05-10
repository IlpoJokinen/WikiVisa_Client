import React, { useRef, useCallback, useLayoutEffect } from 'react'
import {RangeHeader, StyledRange, StyledRangeProgress, StyledThumb } from './SliderStyles'

const getWidth = percentage => `${percentage}%`

const getPercentage = (current, min, max) =>
  ((current - min) / (max - min)) * 100

const getValue = (percentage, min, max) =>
  ((max - min) / 100) * percentage + min

const getLeft = percentage => `calc(${percentage}% - 5px)`

const Range = ({
    initial,
    min = 0,
    max,
    formatFn = number => number.toFixed(0),
}) => {
    const initialPercentage = getPercentage(initial, max)
    
    const rangeRef = useRef()
    const rangeProgressRef = useRef()
    const thumbRef = useRef()
    const currentRef = useRef()

    const diff = useRef()

    const handleUpdate = useCallback(
      (value, percentage) => {
        thumbRef.current.style.left = getLeft(percentage)
        rangeProgressRef.current.style.width = getWidth(percentage)
        currentRef.current.textContent = formatFn(value)
      },
      [formatFn]
    )

    const handleMouseMove = event => {
        let newX =
          event.clientX -
          diff.current -
          rangeRef.current.getBoundingClientRect().left
    
        const end =
          rangeRef.current.offsetWidth - thumbRef.current.offsetWidth
    
        const start = 0
    
        if (newX < start) {
          newX = 0
        }
    
        if (newX > end) {
          newX = end
        }
    
        const newPercentage = getPercentage(newX, start, end)
        const newValue = getValue(newPercentage, min, max)
    
        handleUpdate(newValue, newPercentage)
      }

      const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mousemove', handleMouseMove)
      }
    
      const handleMouseDown = event => {
        diff.current =
          event.clientX - thumbRef.current.getBoundingClientRect().left
    
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
      };
    
      useLayoutEffect(() => {
        handleUpdate(initial, initialPercentage);
      }, [initial, initialPercentage, handleUpdate])
    
      return (
        <>
          <RangeHeader>
            <div>
              <strong ref={currentRef} />
              &nbsp;/&nbsp;
              {formatFn(max)}
            </div>
          </RangeHeader>
          <StyledRange ref={rangeRef}>
            <StyledRangeProgress ref={rangeProgressRef} />
            <StyledThumb ref={thumbRef} onMouseDown={handleMouseDown} />
          </StyledRange>
        </>
      )
    }

    const RangeSlider = () => (
        <div>
          <Range
            initial={1}
            min={1}
            max={50}
            formatFn={number => number.toFixed(0)}
          />
        </div>
      );
      
      export default RangeSlider
    