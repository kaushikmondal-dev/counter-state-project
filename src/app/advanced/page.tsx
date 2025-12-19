import AdvancedCounter from "@/components/AdvancedCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Counter State Project",
	description: "Advanced page of Counter State Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-black">
						Advanced Counter App
					</CardTitle>

					<AdvancedCounter />
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
