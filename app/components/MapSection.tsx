'use client'

import React from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import SectionSubTitle from './SectionSubTitle'
import MapBoxContainer from './MapBox.Container'

function MapSection() {
  return (
    <Section>
      <SectionTitle
        className="text-[50px] font-bold"
        title="Go dive into"
      />
      <SectionSubTitle title="지도의 핀을 클릭하면," />
      <SectionSubTitle title="해당 지역에서 찍은 사진을 볼 수 있어요." />
      <MapBoxContainer />
    </Section>
  )
}

export default MapSection
