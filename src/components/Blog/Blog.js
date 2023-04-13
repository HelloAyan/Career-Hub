import React from 'react';
import Styles from './Blog.module.css';
import Menu from '../Menu/Menu';


const Blog = () => {
    return (
        <>
            <Menu />
            <div className={Styles.blogContainer}>
                <div className={Styles.questionSection}>
                    <div className={Styles.title}>1. When should you use context API?</div>
                    <div className={Styles.answer}>Ans: Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. </div>
                </div>
                <div className={Styles.questionSection}>
                    <div className={Styles.title}>2. What is a custom hook?</div>
                    <div className={Styles.answer}>Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. </div>
                </div>
                <div className={Styles.questionSection}>
                    <div className={Styles.title}>3. What is useRef?</div>
                    <div className={Styles.answer}>Ans: useRef  is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current . </div>
                </div>
                <div className={Styles.questionSection}>
                    <div className={Styles.title}>4. What is useMemo?</div>
                    <div className={Styles.answer}>Ans: The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result.  </div>
                </div>
            </div>
        </>
    )
}

export default Blog;