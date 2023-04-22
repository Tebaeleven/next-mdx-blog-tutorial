import clsx from 'clsx';
import React from 'react'
import classes from "./TagFilter.module.css"
import { useRouter } from 'next/router';
function TagFilter({ selectedTag, setSelectedTag, tags }) {
    const router = useRouter()
    return (
        <>
            {tags.map(tag => (
                <button
                    key={tag}
                    className={clsx(
                        classes.tagButton,
                        selectedTag === tag && classes.selected
                    )}
                    onClick={() => {
                        setSelectedTag(tag);
                        router.push('/')
                    }
                }>
                    {tag}
                </button>
            ))}
        </>
    )
}

export default TagFilter