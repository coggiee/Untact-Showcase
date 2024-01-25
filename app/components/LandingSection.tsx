'use client'

import React from 'react'
import { Button, Spacer } from '@nextui-org/react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import SectionSubTitle from './SectionSubTitle'
import ScrollDownIcon from '../icons/ScrollDown'

function LandingSection() {
  return (
    <Section>
      <SectionTitle
        className="text-[50px] font-bold"
        title="Recorder"
      />
      <Spacer y={10} />
      <aside className="flex flex-col self-center items-center">
        <SectionSubTitle title="여행을 좋아하는 데, 자주 가지는 않아요." />
        <SectionSubTitle title="귀찮기도 하고, 돈이 없기도 하고, 시간이 없기도 하고..." />
        <SectionSubTitle title="사진 찍는 건 좋아해요. 그래서 공유하고 싶었어요." />
      </aside>

      <Button
        isIconOnly
        variant="ghost"
        radius="full"
        aria-label="scroll-down"
        className="absolute bottom-10 animate-bounce">
        <ScrollDownIcon fontSize={38} />
      </Button>
    </Section>
  )
}

export default LandingSection
