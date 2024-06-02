import { createItemAction } from "@/app/items/create/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pageTitleStyles } from "@/styles";

export default async function CreatePage() {
  return (
    <main className="space-y-8">
      <h1 className={pageTitleStyles}>Post an Item</h1>

      <form
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        action={createItemAction}
      >
        <Input
          required
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01" // only 2 decimal places
          placeholder="What to start your auction at"
        />
        <Input type="file" name="file" className="cursor-pointer"></Input>
        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </main>
  );
}