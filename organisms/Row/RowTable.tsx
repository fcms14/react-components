import { Row } from "../../molecules/Row";
import { Mask } from "../../helpers/Mask";
import { theme } from "../../../providers/theme";
import { useTranslation } from "react-i18next";

export interface Interface {
    data: any[];
}

const DynamicTable = ({ data }: Interface) => {
    const style = { flexGrow: "0.5", alignItems: "left", width: "100px" }
    const { t } = useTranslation();

    if (!data || data.length === 0) {
        return (
            <div style={{ width: "100%", overflowX: "auto" }}>
                <Row.Root rowStyle={{
                    borderBottom: theme.border,
                    backgroundColor: theme.colors.background.copy,
                    padding: theme.padding.header,
                }}>
                    <Row.Text size="big">{t("No data available")}</Row.Text>
                </Row.Root>
            </div>
        );
    }

    const dynamicColumns = Object.keys(data[0]).filter(
        (key) => key !== "valor" && key !== "quantidade"
    );

    const total = data.reduce(
        (acc, item) => {
            acc.valor += item.valor;
            acc.quantidade += item.quantidade;
            return acc;
        },
        { valor: 0, quantidade: 0 }
    );

     const formatDate = (value: any) => {
        if (typeof value === "string" && !isNaN(Date.parse(value))) {
            return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
        }
        return value;
    };

    return (
        <div style={{ width: "100%", overflowX: "auto" }}>
            {/* Cabeçalho */}
            <Row.Root rowStyle={{
                borderBottom: theme.border,
                backgroundColor: theme.colors.background.copy,
                padding: theme.padding.header,
            }}>
                {dynamicColumns.map((col) => (
                    <Row.Section sectionStyle={style} key={col}>
                        {col}
                    </Row.Section>
                ))}
                <Row.Section sectionStyle={style}>{t("value")}</Row.Section>
                <Row.Section sectionStyle={style}>{t("Quantity")}</Row.Section>
            </Row.Root>
            {/* Dados */}
            {data.map((row, index) => (
                <Row.Root
                    key={index}
                    rowStyle={{
                        borderBottom: `${theme.border} #eee`,
                        padding: theme.padding.header,
                    }}
                >
                    {dynamicColumns.map((col) => (
                        <Row.Section sectionStyle={style} key={col} >
                               {formatDate(row[col])}
                        </Row.Section>
                    ))}
                    <Row.Section sectionStyle={style}>
                        <Row.Text size="big">{total.valor > 0 ? Mask.currency(row.valor) : Mask.currency(0)}</Row.Text>
                    </Row.Section>
                    <Row.Section sectionStyle={style}>
                        {row.quantidade}
                    </Row.Section>
                </Row.Root>
            ))}
            {/* Totalizador */}
            <Row.Root rowStyle={{
                borderBottom: theme.border,
                padding: theme.padding.header,
                backgroundColor: theme.colors.background.copy
            }}>
                {dynamicColumns.map((col, index) => (
                    <Row.Section sectionStyle={style} key={col}>
                        {index === dynamicColumns.length - 1 ? "Total" : ""}
                    </Row.Section>
                ))}
                <Row.Section sectionStyle={style}>
                    <Row.Text size="big">{total.valor > 0 ? Mask.currency(total.valor) : Mask.currency(0)}</Row.Text>
                </Row.Section>
                <Row.Section sectionStyle={style}>
                    {total.quantidade}
                </Row.Section>
            </Row.Root>
        </div>
    );
};

export default DynamicTable;
