import { column, defineDb, defineTable } from "astro:db";

const WhiteList = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		user: column.text(),
		mail: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: { WhiteList },
});
