import {
useContext
}
from "react";

import Navbar
from "../components/layout/Navbar";

import Background
from "../components/layout/Background";

import {
TaskContext
}
from "../context/TaskContext";

import {
achievements
}
from "../data/achievements";

import AchievementCard
from "../components/achievements/AchievementCard";

export default function Achievements(){

const {
completedCount
}
=
useContext(
TaskContext
);

return(

<div>

<Background/>

<Navbar/>

<div
className="
page
grid
md:grid-cols-2
gap-6
"
>

{
achievements.map(
achievement => (

<AchievementCard

key={
achievement.id
}

achievement={
achievement
}

unlocked={
completedCount >=
achievement.target
}

/>

)
)

}

</div>

</div>

);

}