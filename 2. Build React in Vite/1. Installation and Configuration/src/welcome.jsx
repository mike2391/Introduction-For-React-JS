import Paragraph from "./Paragraph";

function Welcome() {
    return (
        <>
            <h2>Congrats You Just Made Your first React Component using Vite</h2>
            <Paragraph/>
        </>
    );
}

// 2 ways to export component:
// 1. type export default [compoenent name] on the bottom of your code
// 2. add export default before you type your function

// Type 1
export default Welcome