export class CategoriaModel {
    _id: string
    titulo: string;
    descricao: string;
    foto: string;
    ativa: boolean;
}
// titulo: { trim: true, index: true, required: true, type: String },
// descricao: { type: String },
// foto: { type: String, required: true },
// ativa: { type: Boolean, required: true, default: true }