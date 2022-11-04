import styled from "styled-components";
import { useTxReceipt } from "../../providers/TxProvider";

const Container = styled.div``;

const Table = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 20px;
    font-family: "Space Mono", monospace;

    .key {
        /* border: 1px solid grey;  */
        width: 500px;
    }
`;

function TxExecutionResources() {
    const data = useTxReceipt();
    return (
        <Container>
            <Table>
                <td className="key">pedersen</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .pedersen_builtin || 0}
                </td>

                <td className="key">output</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .output_builtin || 0}
                </td>

                <td className="key">range_check</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .range_check_builtin || 0}
                </td>

                <td className="key">ecdsa</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .ecdsa_builtin || 0}
                </td>

                <td className="key">bitwise</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .bitwise_builtin || 0}
                </td>

                <td className="key">ec_op</td>
                <td>
                    {data?.execution_resources.builtin_instance_counter
                        .ec_op_builtin || 0}
                </td>

                <td className="key">memory holes</td>
                <td>{data?.execution_resources.n_memory_holes || 0}</td>

                <td className="key">steps</td>
                <td>{data?.execution_resources.n_steps || 0}</td>
            </Table>
        </Container>
    );
}

export default TxExecutionResources;
