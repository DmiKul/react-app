import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

export default function PostFilter({filter, setFilter}) {
	return (
		<div>
		<MyInput
		  value={filter.query}
		  onChange={e => setFilter({...filter, query: e.target.value})}
		></MyInput>
		<MySelect 
		value={filter.sort}
		onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
		defaultValue='Сортировка по'
		options={[
		  {value: 'title', name: 'По названию'},
		  {value: 'body', name: 'По описанию'},
		]}
		>
		</MySelect>
		</div>
	)
}
