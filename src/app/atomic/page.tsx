import ExpertCounter from "@/components/ExpertCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-black">
						Atomic Counter App
					</CardTitle>

					<ExpertCounter />
				</CardHeader>
			</Card>
		</section>
	)
};

export default page;
