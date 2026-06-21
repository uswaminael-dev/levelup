import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Background() {
    const { theme } = useContext(ThemeContext);
return (

<div
className="
fixed
inset-0
-z-10
overflow-hidden
"
>

<div
className="
absolute
w-96
h-96
bg-purple-500/20
rounded-full
blur-3xl
top-10
left-10
"
/>

<div
className="
absolute
w-96
h-96
bg-green-500/20
rounded-full
blur-3xl
bottom-10
right-10
"
/>

<div
className="
absolute
w-96
h-96
bg-cyan-500/20
rounded-full
blur-3xl
top-1/2
left-1/2
"
/>

<div
className={`
absolute
w-96
h-96
rounded-full
blur-3xl
top-10
left-10
${
theme === "minimal"
? "bg-purple-200/40"
: "bg-purple-500/20"
}
`}
/>

</div>

);

}