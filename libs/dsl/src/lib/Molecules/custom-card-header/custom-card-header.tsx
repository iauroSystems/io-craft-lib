import IconComponent from '../../POC/icon-component/icon-component';
import CustomDropdown, {DropdownDataProps,} from '../custom-dropdown/custom-dropdown';

export interface CustomCardHeaderProps {
  data: HeaderDataProps;
}

export interface HeaderDataProps {
  title: string;
  dropdown: DropdownDataProps[];
}

const CustomCardHeader = ({data}: CustomCardHeaderProps) => {
  return (
    <div
      style={{
        minWidth: '558px',
        height: '48px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: '4px 4px 0px 0px',
        padding: '0px 10px 0px 16px',
      }}
    >
      <p
        style={{
          color: '#101321',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '20px',
          margin: 'revert',
        }}
      >
        {data?.title}
      </p>
      <div style={{display: 'flex', gap: '10px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          {data &&
          data.dropdown &&
          data.dropdown.length > 0 &&
          data?.dropdown?.map((icon: any) => {
            return (
              <CustomDropdown
                data={{
                  icon: icon.icon,
                  label: icon.label,
                  onClick: icon.onClick,
                  dropdownList: icon.dropdownList,
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <IconComponent
            name={'close_black_24dp'}
            size={32}
            label={'Arrow-Down'}

            handleClick={() => console.log('more icon cliked')}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCardHeader;
