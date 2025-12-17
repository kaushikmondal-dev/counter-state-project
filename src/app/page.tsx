import BasicCounter from "@/components/BasicCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter State Project",
	description: "Basic page of Counter State Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-black">
						Basic Counter App
					</CardTitle>
				</CardHeader>

				<BasicCounter />
			</Card>
		</section>
	);
};

export default page;
