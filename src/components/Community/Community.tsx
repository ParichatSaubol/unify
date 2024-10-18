import React, { FunctionComponent, useCallback, useRef, useState , useEffect } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useTheme } from '@/hooks';
import CommunityCard, { CommunityCardProps } from './CommunityCard';
import {useLazyGetContentAuthor} from '@/services/gql/modules/author';
import config from '@/utils/config';

// {
//   id: 1,
//   tag: 'tag',
//   title: 'title',
//   createdBy: 'createdBy',
//   onMorePress: () => {},
//   image: Images.community.a,
//   brandImage: Images.community.brand.a,
// },
// {
//   id: 2,
//   tag: 'tag',
//   title: 'title',
//   createdBy: 'createdBy',
//   onMorePress: () => {},
//   image: Images.community.a,
//   brandImage: Images.community.brand.a,
// },
// {
//   id: 3,
//   tag: 'tag',
//   title: 'title',
//   createdBy: 'createdBy',
//   onMorePress: () => {},
//   image: Images.community.a,
//   brandImage: Images.community.brand.a,
// },
// {
//   id: 4,
//   tag: 'tag',
//   title: 'title',
//   createdBy: 'createdBy',
//   onMorePress: () => {},
//   image: Images.community.a,
//   brandImage: Images.community.brand.a,
// },
// {
//   id: 5,
//   tag: 'tag',
//   title: 'title',
//   createdBy: 'createdBy',
//   onMorePress: () => {},
//   image: Images.community.a,
//   brandImage: Images.community.brand.a,
// },

interface Props {}

interface Props {}

const { width: windowWidth } = Dimensions.get('window');
// แสดงรูปภาพแบบ Carousel
const Community: FunctionComponent<Props> = () => {
  const { Images, Layout } = useTheme();
  const [GetContentAuthor] = useLazyGetContentAuthor(); 
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(5);
  const flatListRef = useRef<FlatList>(null); // อ้างอิงไปยัง ScrollView
  const [data , setData] = useState<CommunityCardProps[]>([]);

  const FETCH_DATA_COMMUNITY = async () => {
    const { loading, error, data } = await GetContentAuthor({
      variables: { page: page, perPage: perPage },
    });
    const comunity_array : CommunityCardProps[]= []
    if(data?.getContentAuthor?.content_author.length){
      for (const item of data?.getContentAuthor?.content_author){
        const community :CommunityCardProps = {
          id: item?.author_id,
          tag: 'tag',
          title: 'title',
          createdBy: item?.author_name,
          onMorePress: () => {},
          image: item?.author_img_path
          ? { uri: config.baseURL + item?.author_img_path }
          : undefined,
          brandImage: Images.community.brand.a,
        } 
        comunity_array.push(community)
      }
      return comunity_array

    }else if(loading){
      console.log("FETCH_DATA_COMMUNITY loading")
    }else {
      console.log(error)
    }
  }


  const fetchData = async () => {
    const communties = await FETCH_DATA_COMMUNITY();
          console.log(communties);
          setData([...data,...communties]);

  };

  useEffect(() => {
    fetchData();
  }, []);
  // แสดงรูปภาพแบบ Carousel
  const renderItem = useCallback((item: CommunityCardProps, index: number) => {
    return (
      <CommunityCard
        {...item}
        currentStepper={index + 1}
        maxStepper={data.length}
        onStepperPress={key => {
          flatListRef.current?.scrollToIndex({ animated: true, index: key });
        }}
      />
    );
  }, []);

  

  return (
    <FlatList
      style={Layout.fill}
      ref={flatListRef}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      snapToInterval={windowWidth}
      data={data}
      renderItem={row => renderItem(row.item, row.index)}
      keyExtractor={useCallback(
        (item: CommunityCardProps, _: number) => String(item.id),
        [],
      )}
    />
  );
};

Community.defaultProps = {
  title: 'Press me',
};

export default Community;
