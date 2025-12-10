import React from 'react';
import { Asset } from '../types';

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const Icon = asset.icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-mbk-blue/10 rounded-lg">
          <Icon className="w-6 h-6 text-mbk-blue" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{asset.title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {asset.description}
      </p>
      {asset.value && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-semibold text-mbk-light">
          Оценка: {asset.value}
        </div>
      )}
    </div>
  );
};

export default AssetCard;