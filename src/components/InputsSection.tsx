'use client';

import { NetworkParams } from '@/types/calculator';
import InputField from './InputField';

interface InputsSectionProps {
  params: NetworkParams;
  onParamsChange: (params: NetworkParams) => void;
  onRefreshPrice: () => void;
  refreshLoading: boolean;
  refreshStatus: string;
}

export default function InputsSection({
  params,
  onParamsChange,
  onRefreshPrice,
  refreshLoading,
  refreshStatus
}: InputsSectionProps) {
  const updateParam = (key: keyof NetworkParams, value: number) => {
    onParamsChange({ ...params, [key]: value });
  };

  return (
    <div className="bg-card border border-border rounded-3xl p-10 shadow-lg sticky top-10 h-fit">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Network Parameters</h2>
        <p className="text-muted-foreground">Adjust core network metrics to model different scenarios</p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="text-lg font-semibold text-foreground mb-4 pb-2 border-b-2 border-border">
            Network Activity
          </div>
          <div className="space-y-5">
            <InputField
              id="dailyRelays"
              label="Daily Relays"
              value={params.dailyRelays}
              onChange={(value) => updateParam('dailyRelays', value)}
              step={1000000}
            />
            <InputField
              id="cusPerRelay"
              label="CUs per Relay"
              value={params.cusPerRelay}
              onChange={(value) => updateParam('cusPerRelay', value)}
              step={1}
            />
            <InputField
              id="poktPrice"
              label="POKT Price ($)"
              value={params.poktPrice}
              onChange={(value) => updateParam('poktPrice', value)}
              step={0.001}
              showRefreshButton
              onRefresh={onRefreshPrice}
              refreshLoading={refreshLoading}
              refreshStatus={refreshStatus}
            />
          </div>
        </div>

        <div>
          <div className="text-lg font-semibold text-foreground mb-4 pb-2 border-b-2 border-border">
            Reward Distribution
          </div>
          <div className="space-y-5">
            <InputField
              id="supplierShare"
              label="Supplier Share (%)"
              value={params.supplierShare}
              onChange={(value) => updateParam('supplierShare', value)}
              step={0.1}
              min={0}
              max={100}
            />
            <InputField
              id="validatorShare"
              label="Validator Share (%)"
              value={params.validatorShare}
              onChange={(value) => updateParam('validatorShare', value)}
              step={0.1}
              min={0}
              max={100}
            />
            <InputField
              id="daoShare"
              label="DAO Share (%)"
              value={params.daoShare}
              onChange={(value) => updateParam('daoShare', value)}
              step={0.1}
              min={0}
              max={100}
            />
            <InputField
              id="sourceOwnerShare"
              label="Service Owner Share (%)"
              value={params.sourceOwnerShare}
              onChange={(value) => updateParam('sourceOwnerShare', value)}
              step={0.1}
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 