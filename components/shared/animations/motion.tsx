import { Box, Flex, Image, forwardRef, Text, List } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const createMotionComponent = (Component) =>
  motion.create(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return <Component ref={ref} {...chakraProps} />
    })
  )

export const MotionBox = createMotionComponent(Box)
export const MotionFlex = createMotionComponent(Flex)
export const MotionText = createMotionComponent(Text)
export const MotionList = createMotionComponent(List)

export const MotionImage = motion.create(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return (
      <Image
        ref={ref}
        fallbackSrc={'/assets/images/placeholder.png'}
        {...chakraProps}
      />
    )
  })
)
