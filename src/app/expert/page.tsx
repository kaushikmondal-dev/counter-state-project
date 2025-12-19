import ExpertCounter from "@/components/ExpertCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert | Counter State Project",
	description: "Ecpert page of Counter State Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-black">
						Expert Counter App
					</CardTitle>

					<ExpertCounter />
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
