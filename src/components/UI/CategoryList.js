import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import BlueCheckbox from './BlueCheckbox'

const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => fetchCategories(), [])
    const fetchCategories = () => {
        let mounted = true
        fetch('http://localhost:3001/api/categories')
        .then(res => res.json())
        .then(data => {
            if (mounted){
                setCategories(data)
            }
        }).catch(console.log)
        return () => mounted = false
    }
    const addToSelectedCategories = categoryId => {
        let exists = selectedCategories.find((id) => id === categoryId)
        if(exists) {
            setSelectedCategories(selectedCategories.filter((id) => { 
                return id !== categoryId 
            }))
        } else {
            setSelectedCategories([...selectedCategories, categoryId])
        }        
    }
    return <Grid container spacing={2} className="questionCategoriesCheckboxList">
        { categories.length ?
            categories.map((category, i) => {
                return <Grid item xs={6} sm={6} md={4} key={i}>
                    <BlueCheckbox label={category.prettyName} name={`category-${i}`} onClick={() => addToSelectedCategories(category.id)} /> 
                </Grid>
            }) : <Grid item >No Categories Found</Grid>
        }
    </Grid>
}

export default CategoryList