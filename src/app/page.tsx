import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { CircleMinus, CirclePlus } from "lucide-react";
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
				<CardContent className="text-center">
					<div>Counter Value 0</div>
					<div className="grid grid-cols-2 gap-4 pt-4">
						<Button
							className="px-4"
							variant={"destructive"}>
							<CircleMinus />
							Minus 1
						</Button>
						<Button
							className="px-4"
							variant={"default"}>
							<CirclePlus />
							Plus 1
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
