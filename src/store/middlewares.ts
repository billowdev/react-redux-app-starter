import ui from "./ui/middleware"
import articles from "./articles/middleware"

export default [
	...ui,
	...articles,
]