import { days, months, years } from '@/constants/dateItem'
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

interface SelectorProps {
  selectedItem: {
    year: string
    month: string
    day: string
  }
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Selector({ selectedItem, onChange }: SelectorProps) {
  return (
    <div className="w-full flex justify-center items-center gap-3 max-w-xl">
      <Select
        isRequired
        items={years}
        label="Year"
        placeholder="year"
        className="max-w-sm"
        name="year"
        selectedKeys={[selectedItem.year]}
        onChange={onChange}>
        {years.map((year) => (
          <SelectItem
            key={year.value}
            textValue={year.value}>
            {year.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        isRequired
        items={months}
        label="Month"
        placeholder="month"
        className="max-w-sm"
        name="month"
        selectedKeys={[selectedItem.month]}
        onChange={onChange}>
        {months.map((month) => (
          <SelectItem
            key={month.value}
            textValue={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        isRequired
        items={days}
        label="Day"
        placeholder="day"
        className="max-w-sm"
        name="day"
        selectedKeys={[selectedItem.day]}
        onChange={onChange}>
        {days.map((day) => (
          <SelectItem
            key={day.value}
            textValue={day.value}>
            {day.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
