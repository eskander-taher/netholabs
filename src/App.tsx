import Background from "./components/Background";
import NavBar from "./components/Navbar";
import SparklesPreview from "./components/Paragraph";

function App() {
	const navItems: any = [
		{
			name: "Netholabs",
			link: "/",
		},
		{
			name: "Jobs and Hiring",
			link: "/jobs",
		},
		{
			name: "About Us",
			link: "/about",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];
	return (
		<div>
			<NavBar navItems={navItems} />
			<Background />
			<SparklesPreview />
		</div>
	);
}

export default App;
