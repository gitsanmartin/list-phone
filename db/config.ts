import { column, defineDb, defineTable } from "astro:db";

const WhiteList = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		user: column.text(),
		mail: column.text(),
	},
});

const Secretarias = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		oficina: column.text(),
	},
});

const Internos = defineTable({
	columns: {
		id: column.number({ primaryKey: true }), // el número de internog
		persona: column.text(), // quien atiende ese interno
		numOficina: column.number({ references: () => Secretarias.columns.id }), //relación
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: { WhiteList, Secretarias, Internos },
});
