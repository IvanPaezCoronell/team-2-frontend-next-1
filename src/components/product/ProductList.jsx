import {
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline'

export function ProductList({ products, deleteProduct, showProduct }) {
    return (
        <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr className="[&_th]:px-6 [&_th]:align-middle [&_th]:border [&_th]:border-solid [&_th]:py-3 [&_th]:text-xl [&_th]:border-l-0 [&_th]:border-r-0 [&_th]:whitespace-nowrap [&_th]:font-semibold [&_th]:text-left [&_th]:text-oscuro">
                        <th>Imagen</th>
                        <th>Categoría</th>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Unida Medida</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="[&_td]:border-t-0 [&_td]:px-6 [&_td]:align-middle [&_td]:border-l-0 [&_td]:border-r-0 [&_td]:text-mb [&_td]:whitespace-nowrap [&_td]:p-4">
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={product.cod_}>
                                    <td><img className="h-10" src={product.img_} alt={product.des_} /></td>
                                    <td>{product.cat_}</td>
                                    <td>{product.cod_}</td>
                                    <td>{product.nom_}</td>
                                    <td>{product.mar_}</td>
                                    <td>{product.uni_}</td>
                                    <td>{product.pre_}</td>
                                    <td>{product.can_}</td>
                                    <td className="flex gap-4">
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white h-10 w-10 font-bold p-2 rounded"
                                            onClick={() => showProduct(product.id_)}
                                        >
                                            <PencilSquareIcon className="h-6 w-6 text-white" />
                                        </button>

                                        <button
                                            className="bg-red-500 hover:bg-red-700 h-10 w-10 text-white font-bold p-2 rounded"
                                            onClick={() => deleteProduct(product.cod_)}
                                        >
                                            <TrashIcon className="h-6 w-6 text-white" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}