import { Select } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

type searchProps={
    value: string;
}

function Search() {
  return (
    <Select name="status" as={Fragment}>
      {({ focus, hover }) => (
        <select className={clsx('border', focus && 'bg-blue-100', hover && 'shadow')} aria-label="Project status">
          <option value="Design">Power BI</option>
          <option value="Marketing"></option>
          <option value="Data Science"></option>
          <option value="Management"></option>
        </select>
      )}
    </Select>
  )
}

export default Search