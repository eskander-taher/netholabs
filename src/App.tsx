import Background from "./components/Background";
import NavBar from "./components/Navbar";

function App() {
	const navItems: any = [
		{
			name: "Netholabs",
			link: "/",
		},
		{
			name: "Jobs and Hiring",
			link: "/",
		},
		{
			name: "About Us",
			link: "/",
		},
		{
			name: "Contact",
			link: "/",
		},
	];
	return (
		<div>
			<NavBar navItems={navItems} />
			<Background />
		</div>
	);
}

export default App;
